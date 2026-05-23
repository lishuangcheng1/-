@echo off
cd /d "%~dp0"
echo.
echo China map game server starting...
echo.
echo Open this on this computer:
echo   http://localhost:8765/
echo.
echo On your phone, connect to the same Wi-Fi and open:
echo   http://192.168.1.15:8765/
echo.
echo Keep this window open while playing on the phone.
echo If Windows Firewall asks, allow access on Private networks.
echo.
"C:\Program Files\nodejs\node.exe" server.js
pause
