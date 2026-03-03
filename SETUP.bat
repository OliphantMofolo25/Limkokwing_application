@echo off
echo ================================================
echo   Limkokwing Prospectus App - Setup Script
echo ================================================
echo.
echo Step 1: Installing all dependencies...
call npm install
echo.
echo Step 2: Fixing any version conflicts...
call npx expo install --fix
echo.
echo ================================================
echo   Setup complete! 
echo   Now run:  npx expo start --clear
echo ================================================
pause
