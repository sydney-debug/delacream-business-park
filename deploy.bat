@echo off
echo ========================================
echo De La Cream Business Park - Deployment
echo ========================================
echo.

echo Building frontend for production...
npm run build
if %errorlevel% neq 0 (
    echo Error: Frontend build failed
    pause
    exit /b 1
)

echo.
echo Frontend build completed successfully!
echo Built files are in the 'dist' directory.
echo.

echo ========================================
echo Deployment Options:
echo ========================================
echo.
echo 1. Netlify: Deploy the 'dist' folder to Netlify
echo 2. Vercel: Run 'vercel --prod' in this directory
echo 3. Static hosting: Upload 'dist' folder contents
echo.
echo Backend deployment:
echo - Deploy server folder to your hosting provider
echo - Set environment variables
echo - Install dependencies with 'npm install'
echo - Start with 'npm start' or use PM2
echo.
echo For detailed instructions, see README.md
echo.
pause
