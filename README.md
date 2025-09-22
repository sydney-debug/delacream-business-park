# De La Cream Business Park Website

A modern, responsive website for De La Cream Business Park featuring business spaces, fine dining restaurant, and luxury hotel accommodations.

## Features

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Interactive Gallery**: Photo gallery with lightbox functionality
- **Contact Forms**: Reservation and inquiry forms
- **Admin Dashboard**: Content and photo management system

### Pages
- **Homepage**: Hero section with service overview
- **Business Park**: Office space listings and amenities
- **Restaurant**: Menu highlights and reservation system
- **Hotel Rooms**: Accommodation options and booking
- **Gallery**: Photo gallery with category filtering
- **Contact**: Contact information and inquiry forms
- **Admin**: Secure login and dashboard for content management

### Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **HTTP Client**: Axios

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd delacream-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── BusinessParkPage.tsx
│   ├── RestaurantPage.tsx
│   ├── HotelPage.tsx
│   ├── GalleryPage.tsx
│   ├── ContactPage.tsx
│   ├── AdminLogin.tsx
│   └── AdminDashboard.tsx
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Admin Features

### Admin Login
- Secure authentication system
- Protected admin routes
- Session management

### Dashboard Features
- **Photo Management**: Upload, organize, and delete photos
- **Content Management**: Edit page content and announcements
- **Settings**: Update contact information and social media links
- **Analytics**: View site statistics and visitor data

### Default Admin Credentials
For demo purposes, any username and password combination will work.
In production, implement proper authentication.

## Contact Information

- **Phone**: 0111717542
- **Email**: info@delacream.co.ke
- **Location**: Busia, Kenya

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Orange tones (#f2760a)
- **Secondary**: Blue tones (#0ea5e9)

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Images
Replace placeholder images with actual photos of:
- Office spaces and meeting rooms
- Restaurant interior and dishes
- Hotel rooms and amenities
- Building exterior and facilities

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables if needed

### Other Platforms
The built static files can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Responsive images with proper alt text
- Fast loading with optimized assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for De La Cream Business Park.

## Support

For technical support or questions:
- Email: support@delacream.co.ke
- Phone: 0111717542<br>
