const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const router = express.Router();

// Mock content data (in production, use database)
let contentPages = [
  {
    id: 1,
    slug: 'homepage-hero',
    title: 'Homepage Hero Section',
    content: {
      heading: 'De La Cream Business Park',
      subheading: 'Where business excellence meets luxury hospitality',
      description: 'Experience premium office spaces, fine dining, and world-class accommodation all in one location.',
      ctaText: 'Explore Business Park'
    },
    status: 'published',
    lastModified: new Date().toISOString(),
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    slug: 'business-park-overview',
    title: 'Business Park Overview',
    content: {
      heading: 'Your Business Deserves the Best',
      description: 'De La Cream Business Park offers a prestigious address in the heart of Nairobi\'s business district.',
      features: [
        'Prime location in Nairobi CBD',
        '50+ office spaces available',
        'Flexible lease terms'
      ]
    },
    status: 'published',
    lastModified: new Date().toISOString(),
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    slug: 'contact-info',
    title: 'Contact Information',
    content: {
      phone: '+254 720 206 142',
      email: 'info@delacream.co.ke',
      address: 'De La Cream Business Park, Nairobi, Kenya',
      socialMedia: {
        facebook: 'https://facebook.com/delacream',
        instagram: 'https://instagram.com/delacream',
        twitter: 'https://twitter.com/delacream',
        linkedin: 'https://linkedin.com/company/delacream'
      }
    },
    status: 'published',
    lastModified: new Date().toISOString(),
    createdAt: new Date().toISOString()
  }
];

let contentIdCounter = 4;

// @route   GET /api/content
// @desc    Get all content pages
// @access  Public
router.get('/', (req, res) => {
  try {
    const { status, slug } = req.query;
    
    let filteredContent = contentPages;
    
    if (status) {
      filteredContent = filteredContent.filter(page => page.status === status);
    }
    
    if (slug) {
      filteredContent = filteredContent.filter(page => page.slug === slug);
    }

    res.json({
      success: true,
      count: filteredContent.length,
      data: filteredContent
    });

  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching content'
    });
  }
});

// @route   GET /api/content/:slug
// @desc    Get content by slug
// @access  Public
router.get('/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const content = contentPages.find(page => page.slug === slug);
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      data: content
    });

  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching content'
    });
  }
});

// @route   POST /api/content
// @desc    Create new content page
// @access  Private (Admin only)
router.post('/', auth, [
  body('slug').notEmpty().withMessage('Slug is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('status').optional().isIn(['draft', 'published']).withMessage('Invalid status')
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

    const { slug, title, content, status = 'draft' } = req.body;

    // Check if slug already exists
    const existingContent = contentPages.find(page => page.slug === slug);
    if (existingContent) {
      return res.status(400).json({
        success: false,
        message: 'Content with this slug already exists'
      });
    }

    const newContent = {
      id: contentIdCounter++,
      slug,
      title,
      content,
      status,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    contentPages.push(newContent);

    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: newContent
    });

  } catch (error) {
    console.error('Content creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating content'
    });
  }
});

// @route   PUT /api/content/:id
// @desc    Update content page
// @access  Private (Admin only)
router.put('/:id', auth, [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('content').optional().notEmpty().withMessage('Content cannot be empty'),
  body('status').optional().isIn(['draft', 'published']).withMessage('Invalid status')
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

    const contentId = parseInt(req.params.id);
    const contentIndex = contentPages.findIndex(page => page.id === contentId);

    if (contentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    const { title, content, status } = req.body;
    
    if (title) contentPages[contentIndex].title = title;
    if (content) contentPages[contentIndex].content = content;
    if (status) contentPages[contentIndex].status = status;
    
    contentPages[contentIndex].lastModified = new Date().toISOString();

    res.json({
      success: true,
      message: 'Content updated successfully',
      data: contentPages[contentIndex]
    });

  } catch (error) {
    console.error('Content update error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating content'
    });
  }
});

// @route   DELETE /api/content/:id
// @desc    Delete content page
// @access  Private (Admin only)
router.delete('/:id', auth, (req, res) => {
  try {
    const contentId = parseInt(req.params.id);
    const contentIndex = contentPages.findIndex(page => page.id === contentId);

    if (contentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    contentPages.splice(contentIndex, 1);

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });

  } catch (error) {
    console.error('Content delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting content'
    });
  }
});

// @route   PUT /api/content/:id/publish
// @desc    Publish/unpublish content
// @access  Private (Admin only)
router.put('/:id/publish', auth, [
  body('status').isIn(['draft', 'published']).withMessage('Status must be draft or published')
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

    const contentId = parseInt(req.params.id);
    const { status } = req.body;
    
    const contentIndex = contentPages.findIndex(page => page.id === contentId);

    if (contentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    contentPages[contentIndex].status = status;
    contentPages[contentIndex].lastModified = new Date().toISOString();

    res.json({
      success: true,
      message: `Content ${status} successfully`,
      data: contentPages[contentIndex]
    });

  } catch (error) {
    console.error('Content publish error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating content status'
    });
  }
});

module.exports = router;
