import { readFile, writeFile } from 'node:fs/promises';

const file = new URL('../src/components/portfolio/Menu.jsx', import.meta.url);
const source = await readFile(file, 'utf8');
const projects = JSON.parse(source.slice(source.indexOf('['), source.lastIndexOf(']') + 1));
const response = await fetch('https://api.github.com/users/Bhumika-Chopra/repos?per_page=100&sort=updated', {
  headers: { Accept: 'application/vnd.github+json' }
});
if (!response.ok) throw new Error(`GitHub returned ${response.status}; existing projects were preserved.`);
const repos = await response.json();
const known = new Set(projects.map(project => project.repositoryUrl));
const additions = repos.filter(repo => !repo.fork && !repo.archived && repo.description && repo.language && !known.has(repo.html_url) && !['Bhumika-Chopra', 'Bhumika-Chopra.github.io'].includes(repo.name));
for (const repo of additions) {
  projects.push({ id: projects.length + 1, title: repo.name, description: repo.description, category: [repo.language], repositoryUrl: repo.html_url });
}
for (const project of projects) {
  const repo = repos.find(repo => repo.html_url === project.repositoryUrl);
  if (!repo) throw new Error(`Selected repository missing: ${project.repositoryUrl}. Review before removing it.`);
  project.category = [repo.language || 'Project'];
}
await writeFile(file, '// Public GitHub repository snapshot; refresh with npm run sync:projects.\nconst Menu = ' + JSON.stringify(projects, null, 2) + ';\nexport default Menu;\n');
console.log(`Updated ${projects.length} projects; Setu remains first. Review new entries before publishing.`);
