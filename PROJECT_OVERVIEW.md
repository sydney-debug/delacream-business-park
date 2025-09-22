# De La Cream Business Park Website - Project Overview

## 🏢 Project Description

A modern, responsive website for De La Cream Business Park featuring premium office spaces, fine dining restaurant, and luxury hotel accommodations. The website includes both a public-facing site and a comprehensive admin dashboard for content management.

## ✨ Key Features

### Public Website
- **Responsive Design**: Mobile-first approach with elegant UI/UX
- **Interactive Gallery**: Photo gallery with category filtering and lightbox
- **Booking Systems**: Restaurant reservations and hotel booking inquiries
- **Contact Forms**: Multiple contact options with email integration
- **Newsletter Signup**: Email subscription with welcome emails
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading

### Admin Dashboard
- **Secure Authentication**: JWT-based login system
- **Photo Management**: Upload, organize, and delete gallery images
- **Content Management**: Edit page content and announcements
- **Booking Management**: View and manage reservations
- **Newsletter Management**: Manage subscribers and send newsletters
- **Settings Panel**: Update contact information and social media links

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router DOM** for navigation
- **Lucide React** for icons
- **React Hook Form** for form handling
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **JWT** for authentication
- **Multer** for file uploads
- **Nodemailer** for email functionality
- **Express Validator** for input validation
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Rate Limiting** for API protection

## 📁 Project Structure

```
delacream-website/
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── Footer.tsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx   # Landing page
│   │   ├── BusinessParkPage.tsx
│   │   ├── RestaurantPage.tsx
│   │   ├── HotelPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── AdminLogin.tsx
│   │   └── AdminDashboard.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── server/               # Backend API
│   ├── routes/          # API route handlers
│   │   ├── auth.js      # Authentication routes
│   │   ├── gallery.js   # Gallery management
│   │   ├── content.js   # Content management
│   │   ├── contact.js   # Contact forms
│   │   ├── bookings.js  # Booking system
│   │   └── newsletter.js # Newsletter management
│   ├── middleware/      # Custom middleware
│   │   └── auth.js      # JWT authentication
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
├── public/              # Static assets
├── dist/               # Production build output
├── package.json        # Frontend dependencies
├── README.md          # Project documentation
└── setup.bat          # Windows setup script
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
2. **Run the setup script**:
   ```bash
   setup.bat
   ```
   Or manually:
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   ```

3. **Configure environment variables**:
   - Copy `server/.env.example` to `server/.env`
   - Update the configuration with your settings

4. **Start development servers**:
   ```bash
   # Terminal 1: Start frontend (from root directory)
   npm run dev
   
   # Terminal 2: Start backend (from server directory)
   cd server
   npm run dev
   ```

5. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:3000/admin

## 🔐 Admin Access

**Default Credentials** (for demo):
- Username: Any username
- Password: Any password

*Note: In production, implement proper authentication with secure credentials.*

## 📧 Email Configuration

To enable contact forms and newsletter functionality:

1. **Gmail Setup** (recommended for development):
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Update `.env` with your credentials

2. **Environment Variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   FROM_EMAIL=noreply@delacream.co.ke
   FROM_NAME=De La Cream Business Park
   ```

## 🌐 Deployment

### Frontend Deployment

**Netlify** (Recommended):
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects (included in `netlify.toml`)

**Vercel**:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

**Other Static Hosts**:
1. Build: `npm run build`
2. Upload `dist` folder contents to your hosting provider

### Backend Deployment

**Heroku**:
1. Create a new Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy the `server` folder

**VPS/Cloud Server**:
1. Upload server files
2. Install dependencies: `npm install`
3. Set environment variables
4. Use PM2 for process management: `pm2 start server.js`

## 📱 Features Breakdown

### Homepage
- Hero section with call-to-action
- Service overview cards
- Statistics section
- About section with features
- Newsletter signup

### Business Park
- Office space types and pricing
- Amenities showcase
- Virtual tour section
- Booking inquiry forms

### Restaurant
- Menu highlights by category
- Chef and cuisine features
- Dining spaces showcase
- Reservation system

### Hotel
- Room types and rates
- Amenities and services
- Booking availability checker
- Guest testimonials

### Gallery
- Category-based filtering
- Lightbox image viewer
- Admin upload functionality
- Responsive grid layout

### Contact
- Multiple contact methods
- Department-specific contacts
- Contact form with validation
- FAQ section
- Google Maps integration placeholder

### Admin Dashboard
- Overview with statistics
- Photo gallery management
- Content editing system
- Booking management
- Newsletter tools
- Settings panel

## 🔧 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo and favicon in `public/`
- Modify company information in components

### Content
- Edit page content through admin dashboard
- Update contact information in settings
- Replace placeholder images with actual photos

### Features
- Add new pages by creating components in `src/pages/`
- Extend API by adding routes in `server/routes/`
- Customize email templates in route handlers

## 🛡 Security Features

- JWT authentication for admin routes
- Rate limiting (100 requests per 15 minutes)
- Input validation and sanitization
- CORS configuration
- Helmet security headers
- File upload restrictions
- Environment variable protection

## 📊 Performance Optimizations

- Vite for fast development and building
- Code splitting with React Router
- Image optimization recommendations
- CSS purging with Tailwind
- Compression middleware
- Static asset caching headers

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in package.json scripts
2. **Email not sending**: Check SMTP credentials and firewall
3. **File uploads failing**: Verify upload directory permissions
4. **Build errors**: Clear node_modules and reinstall dependencies

### Development Tips

- Use browser dev tools for debugging
- Check console for error messages
- Verify API endpoints with tools like Postman
- Test responsive design on multiple devices

## 📞 Support

For technical support or questions:
- **Email**: support@delacream.co.ke
- **Phone**: 0111717542
- **Location**: Busia, Kenya

## 📄 License

This project is proprietary software for De La Cream Business Park.

---

**Built with ❤️ for De La Cream Business Park**
