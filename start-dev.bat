@echo off
echo ========================================
echo De La Cream Business Park - Development
echo ========================================
echo.

echo Starting development servers...
echo.

echo [1/2] Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm run dev"

timeout /t 3 /nobreak >nul

echo [2/2] Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo Development servers are starting...
echo ========================================
echo.
echo Backend API: http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin Panel: http://localhost:3000/admin
echo.
echo Press any key to close this window...
pause >nul
