import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 🔧 Build do Vite
console.log('🔧 Gerando build...');
execSync('vite build', { stdio: 'inherit' });

// 📁 Copiar dist para docs
const distPath = path.resolve('dist');
const docsPath = path.resolve('docs');

if (fs.existsSync(docsPath)) {
  fs.rmSync(docsPath, { recursive: true, force: true });
}

fs.cpSync(distPath, docsPath, { recursive: true });
console.log('🚀 Build copiado para pasta docs/');

// 📝 Buscar comentário da última versão
const logPath = path.resolve('version-log.json');
let commitMessage = 'Atualização sem comentário';

if (fs.existsSync(logPath)) {
  const log = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
  const lastEntry = log[log.length - 1];
  if (lastEntry?.note) {
    commitMessage = `v${lastEntry.version} – ${lastEntry.note}`;
  }
}

// 🧠 Git commit e push
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });
  console.log(`✅ Commit realizado: "${commitMessage}"`);
} catch (err) {
  console.error('❌ Falha ao executar comandos Git:', err.message);
}
