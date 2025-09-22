const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
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

// @route   POST /api/contact/send
// @desc    Send contact form message
// @access  Public
router.post('/send', [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
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

    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><small>Sent from De La Cream Business Park website</small></p>
    `;

    // Send email
    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.SMTP_USER,
      subject: `Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationEmail = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting De La Cream Business Park',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>De La Cream Business Park Team</p>
        <p>Phone: +254 720 206 142<br>Email: info@delacream.co.ke</p>
      `
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// @route   GET /api/contact/info
// @desc    Get contact information
// @access  Public
router.get('/info', (req, res) => {
  try {
    const contactInfo = {
      phone: '0111717542',
      email: 'info@delacream.co.ke',
      address: {
        street: 'De La Cream Business Park',
        city: 'Busia',
        country: 'Kenya'
      },
      departments: {
        leasing: {
          email: 'leasing@delacream.co.ke',
          phone: '0111717542 Ext. 1'
        },
        restaurant: {
          email: 'restaurant@delacream.co.ke',
          phone: '0111717542 Ext. 2'
        },
        hotel: {
          email: 'hotel@delacream.co.ke',
          phone: '0111717542 Ext. 3'
        }
      },
      socialMedia: {
        facebook: 'https://facebook.com/delacream',
        instagram: 'https://instagram.com/delacream',
        twitter: 'https://twitter.com/delacream',
        linkedin: 'https://linkedin.com/company/delacream'
      },
      businessHours: {
        reception: '24/7',
        restaurant: '6:00 AM - 11:00 PM',
        businessPark: '24/7 Access for Tenants'
      }
    };

    res.json({
      success: true,
      data: contactInfo
    });

  } catch (error) {
    console.error('Contact info error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact information'
    });
  }
});

module.exports = router;
