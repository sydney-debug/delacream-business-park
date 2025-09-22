# De La Cream Business Park - Backend API

This is the backend API server for the De La Cream Business Park website, built with Node.js and Express.

## Features

- **Authentication**: JWT-based admin authentication
- **Gallery Management**: Photo upload and management
- **Content Management**: Dynamic content editing
- **Contact Forms**: Email handling for inquiries
- **Booking System**: Restaurant and hotel reservations
- **Newsletter**: Subscription and email management
- **File Uploads**: Image upload with validation
- **Security**: Rate limiting, CORS, and input validation

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/verify` - Verify JWT token
- `POST /api/auth/logout` - Admin logout

### Gallery Management
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery/upload` - Upload new images (Admin)
- `PUT /api/gallery/:id` - Update image details (Admin)
- `DELETE /api/gallery/:id` - Delete image (Admin)

### Content Management
- `GET /api/content` - Get all content pages
- `GET /api/content/:slug` - Get content by slug
- `POST /api/content` - Create new content (Admin)
- `PUT /api/content/:id` - Update content (Admin)
- `DELETE /api/content/:id` - Delete content (Admin)
- `PUT /api/content/:id/publish` - Publish/unpublish content (Admin)

### Contact & Communication
- `POST /api/contact/send` - Send contact form message
- `GET /api/contact/info` - Get contact information

### Booking System
- `POST /api/bookings/restaurant` - Make restaurant reservation
- `POST /api/bookings/hotel` - Make hotel booking inquiry
- `GET /api/bookings` - Get all bookings (Admin)
- `PUT /api/bookings/:id/status` - Update booking status (Admin)
- `DELETE /api/bookings/:id` - Delete booking (Admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers (Admin)
- `POST /api/newsletter/send` - Send newsletter (Admin)

### Health Check
- `GET /api/health` - Server health status

## Setup Instructions

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key-here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@delacream.co.ke
FROM_NAME=De La Cream Business Park
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

5. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Configure production database (MongoDB recommended)
3. Set up proper SMTP credentials
4. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name "delacream-api"
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:3000 |
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_EXPIRE` | JWT expiration time | 7d |
| `SMTP_HOST` | Email server host | smtp.gmail.com |
| `SMTP_PORT` | Email server port | 587 |
| `SMTP_USER` | Email username | Required |
| `SMTP_PASS` | Email password | Required |
| `FROM_EMAIL` | From email address | Required |
| `FROM_NAME` | From name | De La Cream Business Park |
| `ADMIN_USERNAME` | Admin username | admin |
| `ADMIN_PASSWORD` | Admin password | admin123 |

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for frontend domain
- **Helmet**: Security headers
- **Input Validation**: Express-validator for all inputs
- **JWT Authentication**: Secure admin routes
- **File Upload Validation**: Type and size restrictions

## File Upload Configuration

- **Allowed Types**: JPEG, PNG, WebP
- **Max File Size**: 5MB (configurable)
- **Upload Directory**: `uploads/gallery/`
- **Naming**: Timestamp + random suffix

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Validation errors if applicable
}
```

## Success Responses

All successful responses follow this format:

```json
{
  "success": true,
  "message": "Success message",
  "data": {} // Response data
}
```

## Database Integration

Currently uses in-memory storage for demo purposes. For production:

1. Install MongoDB:
```bash
npm install mongoose
```

2. Create database models in `models/` directory
3. Replace in-memory arrays with database operations
4. Add database connection in `server.js`

## Testing

Run tests with:
```bash
npm test
```

## Monitoring

- Health check endpoint: `GET /api/health`
- Request logging with Morgan
- Error logging to console

## Support

For technical support:
- Email: support@delacream.co.ke
- Phone: +254 720 206 142
