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

// Mock newsletter subscribers (in production, use database)
let subscribers = [];
let subscriberIdCounter = 1;

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', [
  body('email').isEmail().withMessage('Valid email is required')
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

    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: 'Email is already subscribed to our newsletter'
      });
    }

    const subscriber = {
      id: subscriberIdCounter++,
      email,
      status: 'active',
      subscribedAt: new Date().toISOString()
    };

    subscribers.push(subscriber);

    // Send welcome email
    const welcomeEmail = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Welcome to De La Cream Business Park Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f2760a;">Welcome to De La Cream Business Park!</h2>
          <p>Thank you for subscribing to our newsletter. You'll now receive:</p>
          <ul>
            <li>Latest updates about our facilities</li>
            <li>Special offers and promotions</li>
            <li>Event announcements</li>
            <li>Business tips and insights</li>
          </ul>
          <p>We're excited to keep you informed about everything happening at De La Cream Business Park.</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            If you no longer wish to receive these emails, you can unsubscribe at any time.
          </p>
          <p style="color: #666; font-size: 12px;">
            De La Cream Business Park<br>
            Nairobi, Kenya<br>
            Phone: +254 720 206 142
          </p>
        </div>
      `
    };

    try {
      await transporter.sendMail(welcomeEmail);
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the subscription if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter! Check your email for confirmation.',
      data: { email: subscriber.email, subscribedAt: subscriber.subscribedAt }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again.'
    });
  }
});

// @route   POST /api/newsletter/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.post('/unsubscribe', [
  body('email').isEmail().withMessage('Valid email is required')
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

    const { email } = req.body;

    const subscriberIndex = subscribers.findIndex(sub => sub.email === email);
    if (subscriberIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our newsletter list'
      });
    }

    subscribers[subscriberIndex].status = 'unsubscribed';
    subscribers[subscriberIndex].unsubscribedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe. Please try again.'
    });
  }
});

// @route   GET /api/newsletter/subscribers
// @desc    Get all newsletter subscribers (Admin only)
// @access  Private
router.get('/subscribers', auth, (req, res) => {
  try {
    const { status = 'active', page = 1, limit = 50 } = req.query;
    
    let filteredSubscribers = subscribers;
    if (status !== 'all') {
      filteredSubscribers = subscribers.filter(sub => sub.status === status);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedSubscribers = filteredSubscribers.slice(startIndex, endIndex);

    res.json({
      success: true,
      count: paginatedSubscribers.length,
      total: filteredSubscribers.length,
      page: parseInt(page),
      pages: Math.ceil(filteredSubscribers.length / limit),
      data: paginatedSubscribers
    });

  } catch (error) {
    console.error('Subscribers fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching subscribers'
    });
  }
});

// @route   POST /api/newsletter/send
// @desc    Send newsletter to all subscribers (Admin only)
// @access  Private
router.post('/send', auth, [
  body('subject').notEmpty().withMessage('Subject is required'),
  body('content').notEmpty().withMessage('Content is required')
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

    const { subject, content } = req.body;
    const activeSubscribers = subscribers.filter(sub => sub.status === 'active');

    if (activeSubscribers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No active subscribers found'
      });
    }

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f2760a; color: white; padding: 20px; text-align: center;">
          <h1>De La Cream Business Park</h1>
        </div>
        <div style="padding: 20px;">
          ${content}
        </div>
        <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p>You received this email because you subscribed to our newsletter.</p>
          <p>De La Cream Business Park | Nairobi, Kenya | +254 720 206 142</p>
        </div>
      </div>
    `;

    let successCount = 0;
    let failCount = 0;

    // Send emails (in production, use a proper email service like SendGrid)
    for (const subscriber of activeSubscribers) {
      try {
        await transporter.sendMail({
          from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
          to: subscriber.email,
          subject: subject,
          html: emailTemplate
        });
        successCount++;
      } catch (emailError) {
        console.error(`Failed to send to ${subscriber.email}:`, emailError);
        failCount++;
      }
    }

    res.json({
      success: true,
      message: `Newsletter sent successfully to ${successCount} subscribers`,
      data: {
        totalSubscribers: activeSubscribers.length,
        successCount,
        failCount
      }
    });

  } catch (error) {
    console.error('Newsletter send error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send newsletter'
    });
  }
});

module.exports = router;
