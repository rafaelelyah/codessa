#!/bin/bash

MODULE_PATH="$1"
VERSION=$(node -p "require('./package.json').version")
NOTE=$(node -e "require('./version-log.json').note")

cd "$MODULE_PATH" || {
  echo "❌ Não foi possível acessar a pasta $MODULE_PATH"
  exit 1
}

if [ ! -d ".git" ]; then
  echo "❌ A pasta $MODULE_PATH não é um repositório Git."
  exit 1
fi

echo "📦 Status do Git:"
git status

echo "➕ Adicionando arquivos..."
git add .

echo "📝 Criando commit..."
git commit -m "release: v$VERSION — $NOTE"

echo "🏷️ Criando tag..."
git tag "v$VERSION"

echo "🚀 Enviando commits..."
git push origin main

echo "📤 Enviando tags..."
git push origin --tags

echo "✅ Push concluído com sucesso para $MODULE_PATH"
