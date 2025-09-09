import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Executa build do Vite
console.log('🔧 Gerando build...');
execSync('vite build', { stdio: 'inherit' });

// Move conteúdo de dist/ para docs/
const distPath = path.resolve('dist');
const docsPath = path.resolve('docs');

// Remove pasta docs se existir
if (fs.existsSync(docsPath)) {
  fs.rmSync(docsPath, { recursive: true, force: true });
}

// Copia dist para docs
fs.cpSync(distPath, docsPath, { recursive: true });
console.log('🚀 Build copiado para pasta docs/');
