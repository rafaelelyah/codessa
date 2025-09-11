@echo off
chcp 65001 >nul
set MODULE_PATH=%~dp0

cd /d %MODULE_PATH%
for /f "delims=" %%v in ('node -p "require('./package.json').version"') do set VERSION=%%v
for /f "delims=" %%n in ('node -e "console.log(require('./version-log.json').note)"') do set NOTE=%%n

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
