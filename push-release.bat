@echo off
chcp 65001 >nul
set MODULE_PATH=%~dp0

cd /d %MODULE_PATH%

:: Captura versão
for /f "delims=" %%v in ('node -p "require('./package.json').version"') do set VERSION=%%v

:: Captura nota e transforma em linha única
node -e "console.log(require('./version-log.json').note.replace(/\r?\n/g, ' · '))" > note.txt
set /p NOTE=<note.txt
del note.txt

if not exist .git (
  echo ❌ A pasta %MODULE_PATH% não é um repositório Git.
  exit /b 1
)

echo 📦 Status do Git:
git status

echo ➕ Adicionando arquivos...
git add .

echo 📝 Criando commit...
git commit -m "release: v%VERSION% — %NOTE%"

echo 🏷️ Criando tag...
git tag v%VERSION%

echo 🚀 Enviando commits...
git push origin main

echo 📤 Enviando tags...
git push origin --tags

echo ✅ Push concluído com sucesso para %MODULE_PATH%
