@echo off
color 0B
echo ===================================================
echo    ROCKET LAUNCH SEQUENCE: IntoTheSpace Platform
echo    NASA Space Apps Challenge 2026
echo ===================================================
echo.

echo [1/3] Checking environment...
if not exist "backend\venv\Scripts\activate" (
    color 0C
    echo ERROR: Python virtual environment not found!
    echo Please run the setup steps in README.md first.
    pause
    exit
)

echo [2/3] Igniting Backend API (Port 8000)...
start "IntoTheSpace - Backend (FastAPI)" cmd /k "cd backend && .\venv\Scripts\activate && uvicorn main:app --reload"

echo [3/3] Igniting Frontend Web Interface (Port 5173)...
start "IntoTheSpace - Frontend (Vite)" cmd /k "cd frontend && npm run dev"

echo.
color 0A
echo ===================================================
echo ALL SYSTEMS GO!
echo Both servers are starting up in new terminal windows.
echo.
echo Your dashboard will be available at:
echo ---^> http://localhost:5173 ^<---
echo ===================================================
echo.
echo (Press any key to close this launcher)
pause > nul
