@echo off
echo ========================================
echo De La Cream Business Park Website Setup
echo ========================================
echo.

echo Installing frontend dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Installing backend dependencies...
cd server
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo Environment file created. Please configure your settings in server/.env
) else (
    echo Environment file already exists.
)

cd ..

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Configure your environment variables in server/.env
echo 2. Run 'npm run dev' to start the frontend
echo 3. Run 'npm run dev' in the server directory to start the backend
echo.
echo For more information, see README.md
echo.
pause
