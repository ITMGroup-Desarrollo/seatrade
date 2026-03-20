@echo off
echo Iniciando servidor Seatrade...
set PATH=%~dp0node;%PATH%
start http://localhost:3000/seatrade/
"%~dp0node\node.exe" "%~dp0node\node_modules\npm\bin\npx-cli.js" serve -l 3000 -s dist
pause