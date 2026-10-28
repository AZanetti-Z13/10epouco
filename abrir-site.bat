@echo off
rem Abre o site no computador (dar dois cliques no index.html nao funciona,
rem porque o Google bloqueia a leitura da planilha nesse modo).
cd /d "%~dp0"
start "" http://localhost:8765
python -m http.server 8765
