// deploy.js
import fs from 'fs';
import path from 'path';

const validTypes = ['patch', 'minor', 'major'];
const type = process.argv[2] || 'patch';

if (!validTypes.includes(type)) {
  console.error(`Tipo de versão inválido: "${type}". Use patch, minor ou major.`);
  process.exit(1);
}

function bumpVersion(type) {
  const pkgPath = path.resolve('package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const [major, minor, patch] = pkg.version.split('.').map(Number);

  let newVersion;
  if (type === 'major') newVersion = `${major + 1}.0.0`;
  else if (type === 'minor') newVersion = `${major}.${minor + 1}.0`;
  else newVersion = `${major}.${minor}.${patch + 1}`;

  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`Versão atualizada para ${newVersion}`);
  return newVersion;
}

bumpVersion(type);