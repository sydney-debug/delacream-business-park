const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = 'uploads/gallery';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and WebP are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 // 5MB default
  }
});

// Mock gallery data (in production, use database)
let galleryImages = [
  {
    id: 1,
    filename: 'office-space-1.jpg',
    originalName: 'Modern Office Space',
    category: 'business-park',
    title: 'Modern Office Space',
    description: 'Contemporary office with natural lighting',
    uploadDate: new Date().toISOString(),
    url: '/uploads/gallery/office-space-1.jpg'
  },
  {
    id: 2,
    filename: 'restaurant-interior.jpg',
    originalName: 'Restaurant Interior',
    category: 'restaurant',
    title: 'Elegant Dining Room',
    description: 'Fine dining atmosphere with sophisticated ambiance',
    uploadDate: new Date().toISOString(),
    url: '/uploads/gallery/restaurant-interior.jpg'
  }
];

// @route   GET /api/gallery
// @desc    Get all gallery images
// @access  Public
router.get('/', (req, res) => {
  try {
    const { category } = req.query;
    
    let filteredImages = galleryImages;
    if (category && category !== 'all') {
      filteredImages = galleryImages.filter(img => img.category === category);
    }

    res.json({
      success: true,
      count: filteredImages.length,
      data: filteredImages
    });
  } catch (error) {
    console.error('Gallery fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery images'
    });
  }
});

// @route   POST /api/gallery/upload
// @desc    Upload new gallery images
// @access  Private (Admin only)
router.post('/upload', auth, upload.array('images', 10), [
  body('category').isIn(['business-park', 'restaurant', 'hotel', 'events'])
    .withMessage('Invalid category'),
  body('title').optional().isLength({ min: 1, max: 100 })
    .withMessage('Title must be between 1 and 100 characters'),
  body('description').optional().isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const { category, title, description } = req.body;
    const uploadedImages = [];

    req.files.forEach((file, index) => {
      const newImage = {
        id: Date.now() + index,
        filename: file.filename,
        originalName: file.originalname,
        category,
        title: title || file.originalname,
        description: description || '',
        uploadDate: new Date().toISOString(),
        url: `/uploads/gallery/${file.filename}`,
        size: file.size
      };

      galleryImages.push(newImage);
      uploadedImages.push(newImage);
    });

    res.status(201).json({
      success: true,
      message: `${uploadedImages.length} image(s) uploaded successfully`,
      data: uploadedImages
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading images'
    });
  }
});

// @route   PUT /api/gallery/:id
// @desc    Update gallery image details
// @access  Private (Admin only)
router.put('/:id', auth, [
  body('title').optional().isLength({ min: 1, max: 100 })
    .withMessage('Title must be between 1 and 100 characters'),
  body('description').optional().isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
  body('category').optional().isIn(['business-park', 'restaurant', 'hotel', 'events'])
    .withMessage('Invalid category')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const imageId = parseInt(req.params.id);
    const imageIndex = galleryImages.findIndex(img => img.id === imageId);

    if (imageIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    const { title, description, category } = req.body;
    
    if (title) galleryImages[imageIndex].title = title;
    if (description) galleryImages[imageIndex].description = description;
    if (category) galleryImages[imageIndex].category = category;

    res.json({
      success: true,
      message: 'Image updated successfully',
      data: galleryImages[imageIndex]
    });

  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating image'
    });
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete gallery image
// @access  Private (Admin only)
router.delete('/:id', auth, (req, res) => {
  try {
    const imageId = parseInt(req.params.id);
    const imageIndex = galleryImages.findIndex(img => img.id === imageId);

    if (imageIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    const image = galleryImages[imageIndex];
    
    // Delete file from filesystem
    const filePath = path.join(uploadsDir, image.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Remove from array
    galleryImages.splice(imageIndex, 1);

    res.json({
      success: true,
      message: 'Image deleted successfully'
    });

  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting image'
    });
  }
});

module.exports = router;
