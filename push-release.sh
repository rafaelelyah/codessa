#!/bin/bash
MODULE_PATH="$(cd "$(dirname "$0")" && pwd)"
cd "$MODULE_PATH"

VERSION=$(node -p "require('./version-log.json').version")
COMMIT=$(node -p "require('./version-log.json').commit")

if [ ! -d .git ]; then
  echo "❌ A pasta $MODULE_PATH não é um repositório Git."
  exit 1
fi

echo "📦 Status do Git:"
git status

echo "➕ Adicionando arquivos..."
git add .

echo "📝 Criando commit..."
git commit -m "release: v$VERSION — $COMMIT"

echo "🏷️ Criando tag..."
git tag "v$VERSION"

echo "🚀 Enviando commits..."
git push origin main

echo "📤 Enviando tags..."
git push origin --tags

echo "✅ Push concluído com sucesso para $MODULE_PATH"
