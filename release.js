import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const validTypes = ['patch', 'minor', 'major'];
const type = process.argv[2] || 'patch';
const comment = process.argv[3] || '';
const preRelease = process.argv[4] || ''; // Ex: alpha, beta, rc.1

if (!validTypes.includes(type)) {
  console.error(`Tipo de versão inválido: "${type}". Use patch, minor ou major.`);
  process.exit(1);
}

// 🔧 Atualiza versão no package.json
function bumpVersion(type, preRelease) {
  const pkgPath = path.resolve('package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const [major, minor, patch] = pkg.version.split('-')[0].split('.').map(Number);

  let newVersion;
  if (type === 'major') newVersion = `${major + 1}.0.0`;
  else if (type === 'minor') newVersion = `${major}.${minor + 1}.0`;
  else newVersion = `${major}.${minor}.${patch + 1}`;

  if (preRelease) {
    newVersion += `-${preRelease}`;
  }

  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`📦 Versão atualizada para ${newVersion}`);
  return newVersion;
}

// 📝 Registra no version-log.json
function logVersion(version, note) {
  const logPath = path.resolve('version-log.json');
  let log = [];

  if (fs.existsSync(logPath)) {
    log = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
  }

  log.push({
    version,
    date: new Date().toISOString(),
    note
  });

  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
  console.log(`📝 Comentário registrado: "${note}"`);
}

// 🚀 Build e deploy para docs/
function deployBuild() {
  console.log('🔧 Gerando build...');
  execSync('vite build', { stdio: 'inherit' });

  const distPath = path.resolve('dist');
  const docsPath = path.resolve('docs');

  if (fs.existsSync(docsPath)) {
    fs.rmSync(docsPath, { recursive: true, force: true });
  }

  fs.cpSync(distPath, docsPath, { recursive: true });
  console.log('🚀 Build copiado para pasta docs/');
}

// 🧠 Git commit, tag e push
function gitCommit(version, note) {
  const commitMessage = `v${version} – ${note}`;
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    execSync(`git tag v${version}`);
    execSync('git push --tags');
    console.log(`✅ Commit e tag criados: "${commitMessage}"`);
  } catch (err) {
    console.error('❌ Falha ao executar comandos Git:', err.message);
  }
}

// 📝 Gera ou atualiza CHANGELOG.md
function generateChangelog() {
  const logPath = path.resolve('version-log.json');
  const changelogPath = path.resolve('CHANGELOG.md');

  if (!fs.existsSync(logPath)) {
    console.error('❌ Arquivo version-log.json não encontrado.');
    return;
  }

  const log = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
  const sortedLog = [...log].sort((a, b) => new Date(b.date) - new Date(a.date));

  let changelogContent = '# 📦 Changelog\n\n';

  for (const entry of sortedLog) {
    const date = new Date(entry.date).toLocaleDateString('pt-BR');
    changelogContent += `## v${entry.version} – ${entry.note}\n_${date}_\n\n`;
  }

  fs.writeFileSync(changelogPath, changelogContent);
  console.log('🗂️ CHANGELOG.md atualizado com sucesso!');
}

// 🔁 Executa tudo
const newVersion = bumpVersion(type, preRelease);
logVersion(newVersion, comment);
deployBuild();
generateChangelog();
gitCommit(newVersion, comment);
