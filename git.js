// interface/git.js
import simpleGit from 'simple-git';

export async function gitCommit(modulePath, moduleKey, moduleLabel, version, fullNote) {
  const git = simpleGit({ baseDir: modulePath });

  const [titleLine, ...bodyLines] = fullNote.split('\n');
  const title = `feat(${moduleKey}): ${titleLine.trim()}`;
  const body = bodyLines.join('\n').trim();
  const commitMessage = body ? `${title}\n\n${body}` : title;

  try {
    await git.add('.');
    await git.commit(commitMessage);
    await git.push('origin', 'main');
    await git.addTag(`${moduleKey}-v${version}`);
    await git.pushTags();

    console.log(`✅ Commit realizado para ${moduleLabel}: ${title}`);
  } catch (err) {
    console.error(`❌ Erro no commit Git para ${moduleLabel}:`, err.message);
  }
}
