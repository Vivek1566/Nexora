@echo off
cd /d "%~dp0"
echo Starting LaunchNest dev server...
call npm.cmd run dev
pause
