# De La Cream Business Park - Complete Setup Guide

## 📋 Prerequisites

Before you can run the De La Cream Business Park website, you need to install Node.js on your system.

### Step 1: Install Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS version** (Long Term Support) - recommended for most users
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Install Node.js**:
   - Run the downloaded installer
   - Follow the installation wizard (accept default settings)
   - Make sure "Add to PATH" is checked during installation
   - The installer will also install npm (Node Package Manager) automatically

3. **Verify Installation**:
   - Open Command Prompt (cmd) or PowerShell
   - Run these commands to verify:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers for both commands

## 🚀 Quick Start (After Node.js Installation)

### Option 1: Automated Setup
1. **Double-click** `setup.bat` in the project folder
2. Wait for dependencies to install
3. **Double-click** `start-dev.bat` to start both servers

### Option 2: Manual Setup
1. **Open Command Prompt** in the project directory
2. **Install frontend dependencies**:
   ```bash
   npm install
   ```
3. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   cd ..
   ```
4. **Start the servers** (open 2 command prompts):
   
   **Terminal 1 - Frontend:**
   ```bash
   npm run dev
   ```
   
   **Terminal 2 - Backend:**
   ```bash
   cd server
   npm run dev
   ```

## 🌐 Access the Website

Once both servers are running:

- **Frontend Website**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:3000/admin

## 📞 Updated Contact Information

The website now displays:
- **Phone**: 0111717542
- **Location**: Busia, Kenya
- **Email**: info@delacream.co.ke

## 🔧 Configuration

### Email Setup (Optional)
To enable contact forms and newsletters:

1. **Create/Edit** `server/.env` file:
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   JWT_SECRET=your-secret-key-here
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   FROM_EMAIL=noreply@delacream.co.ke
   FROM_NAME=De La Cream Business Park
   ```

2. **For Gmail**:
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Use that password in SMTP_PASS

## 🎯 Features Available

### Public Website
- ✅ Responsive homepage with hero section
- ✅ Business Park page with office listings
- ✅ Restaurant page with menu highlights
- ✅ Hotel page with room types and booking
- ✅ Interactive photo gallery
- ✅ Contact page with forms
- ✅ Newsletter signup

### Admin Dashboard
- ✅ Secure login (any username/password for demo)
- ✅ Photo gallery management
- ✅ Content editing system
- ✅ Booking management
- ✅ Newsletter management
- ✅ Settings panel

## 🛠 Development Commands

### Frontend Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run code linting
```

### Backend Commands
```bash
cd server
npm run dev          # Start development server with auto-reload
npm start            # Start production server
npm test             # Run tests (when implemented)
```

## 📱 Project Structure

```
delacream-website/
├── src/                    # Frontend React code
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   └── ...
├── server/                # Backend Node.js API
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middleware
│   └── ...
├── public/               # Static assets
├── setup.bat            # Windows setup script
├── start-dev.bat        # Development server launcher
└── README.md            # Project documentation
```

## 🔍 Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Node.js not installed or not in PATH
   - Restart command prompt after installation
   - Reinstall Node.js with "Add to PATH" checked

2. **Port already in use**
   - Change ports in package.json scripts
   - Kill existing processes using the ports

3. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

4. **Email not working**
   - Check SMTP credentials in .env file
   - Verify firewall settings
   - Use app-specific passwords for Gmail

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure both frontend and backend servers are running
4. Contact support: support@delacream.co.ke

## 🚀 Deployment

### Frontend Deployment
- **Netlify**: Upload `dist` folder after running `npm run build`
- **Vercel**: Connect GitHub repo or use Vercel CLI
- **Static hosting**: Upload built files from `dist` folder

### Backend Deployment
- **Heroku**: Deploy server folder with environment variables
- **VPS**: Upload server files, install dependencies, use PM2

## 📈 Next Steps

1. **Customize Content**: Replace placeholder images and text
2. **Configure Email**: Set up SMTP for contact forms
3. **Add Real Data**: Replace mock data with actual business information
4. **Deploy**: Choose hosting providers and deploy to production
5. **Monitor**: Set up analytics and monitoring tools

## 🎉 You're All Set!

The De La Cream Business Park website is now ready to use with:
- Modern React frontend
- Node.js/Express backend
- Admin dashboard
- Contact forms
- Booking systems
- Photo gallery management

Enjoy your new website! 🌟
