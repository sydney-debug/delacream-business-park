const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const router = express.Router();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Mock bookings data (in production, use database)
let bookings = [];
let bookingIdCounter = 1;

// @route   POST /api/bookings/restaurant
// @desc    Make restaurant reservation
// @access  Public
router.post('/restaurant', [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('date').isISO8601().withMessage('Valid date is required'),
  body('time').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Valid time is required'),
  body('guests').isInt({ min: 1, max: 20 }).withMessage('Number of guests must be between 1 and 20'),
  body('specialRequests').optional().isLength({ max: 500 }).withMessage('Special requests must not exceed 500 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, phone, date, time, guests, specialRequests } = req.body;

    const booking = {
      id: bookingIdCounter++,
      type: 'restaurant',
      name,
      phone,
      date,
      time,
      guests,
      specialRequests: specialRequests || '',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    bookings.push(booking);

    // Send confirmation email
    const emailContent = `
      <h2>Restaurant Reservation Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your reservation at De La Cream Restaurant.</p>
      <p><strong>Reservation Details:</strong></p>
      <ul>
        <li>Date: ${new Date(date).toLocaleDateString()}</li>
        <li>Time: ${time}</li>
        <li>Number of Guests: ${guests}</li>
        <li>Special Requests: ${specialRequests || 'None'}</li>
      </ul>
      <p>We will contact you shortly to confirm your reservation.</p>
      <p>Best regards,<br>De La Cream Restaurant Team</p>
    `;

    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: phone, // In production, collect email address
      subject: 'Restaurant Reservation Confirmation',
      html: emailContent
    };

    // Note: In production, you'd want to collect email address for confirmation
    // await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Reservation submitted successfully! We will contact you shortly.',
      data: booking
    });

  } catch (error) {
    console.error('Restaurant booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process reservation. Please try again.'
    });
  }
});

// @route   POST /api/bookings/hotel
// @desc    Make hotel reservation
// @access  Public
router.post('/hotel', [
  body('checkIn').isISO8601().withMessage('Valid check-in date is required'),
  body('checkOut').isISO8601().withMessage('Valid check-out date is required'),
  body('adults').isInt({ min: 1, max: 10 }).withMessage('Number of adults must be between 1 and 10'),
  body('children').isInt({ min: 0, max: 10 }).withMessage('Number of children must be between 0 and 10'),
  body('roomType').isIn(['standard', 'deluxe', 'executive', 'presidential']).withMessage('Invalid room type')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { checkIn, checkOut, adults, children, roomType } = req.body;

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();

    if (checkInDate < today) {
      return res.status(400).json({
        success: false,
        message: 'Check-in date cannot be in the past'
      });
    }

    if (checkOutDate <= checkInDate) {
      return res.status(400).json({
        success: false,
        message: 'Check-out date must be after check-in date'
      });
    }

    const booking = {
      id: bookingIdCounter++,
      type: 'hotel',
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    bookings.push(booking);

    // Calculate nights and estimated price
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const roomPrices = {
      standard: 8500,
      deluxe: 12000,
      executive: 18000,
      presidential: 35000
    };
    const estimatedTotal = nights * roomPrices[roomType];

    res.status(201).json({
      success: true,
      message: 'Hotel booking inquiry submitted successfully! We will contact you with availability and pricing.',
      data: {
        ...booking,
        nights,
        estimatedTotal
      }
    });

  } catch (error) {
    console.error('Hotel booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process booking inquiry. Please try again.'
    });
  }
});

// @route   GET /api/bookings
// @desc    Get all bookings (Admin only)
// @access  Private
router.get('/', auth, (req, res) => {
  try {
    const { type, status, page = 1, limit = 10 } = req.query;
    
    let filteredBookings = bookings;
    
    if (type) {
      filteredBookings = filteredBookings.filter(booking => booking.type === type);
    }
    
    if (status) {
      filteredBookings = filteredBookings.filter(booking => booking.status === status);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedBookings = filteredBookings.slice(startIndex, endIndex);

    res.json({
      success: true,
      count: paginatedBookings.length,
      total: filteredBookings.length,
      page: parseInt(page),
      pages: Math.ceil(filteredBookings.length / limit),
      data: paginatedBookings
    });

  } catch (error) {
    console.error('Bookings fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings'
    });
  }
});

// @route   PUT /api/bookings/:id/status
// @desc    Update booking status (Admin only)
// @access  Private
router.put('/:id/status', auth, [
  body('status').isIn(['pending', 'confirmed', 'cancelled', 'completed']).withMessage('Invalid status')
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

    const bookingId = parseInt(req.params.id);
    const { status } = req.body;

    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    bookings[bookingIndex].status = status;
    bookings[bookingIndex].updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Booking status updated successfully',
      data: bookings[bookingIndex]
    });

  } catch (error) {
    console.error('Booking update error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating booking status'
    });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete booking (Admin only)
// @access  Private
router.delete('/:id', auth, (req, res) => {
  try {
    const bookingId = parseInt(req.params.id);
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    bookings.splice(bookingIndex, 1);

    res.json({
      success: true,
      message: 'Booking deleted successfully'
    });

  } catch (error) {
    console.error('Booking delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting booking'
    });
  }
});

module.exports = router;
