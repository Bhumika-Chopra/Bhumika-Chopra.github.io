import { readFile, writeFile } from 'node:fs/promises';

const file = new URL('../src/components/portfolio/Menu.jsx', import.meta.url);
const source = await readFile(file, 'utf8');
const projects = JSON.parse(source.slice(source.indexOf('['), source.lastIndexOf(']') + 1));
const response = await fetch('https://api.github.com/users/Bhumika-Chopra/repos?per_page=100&sort=updated', {
  headers: { Accept: 'application/vnd.github+json' }
});
if (!response.ok) throw new Error(`GitHub returned ${response.status}; existing projects were preserved.`);
const repos = await response.json();
for (const project of projects) {
  const repo = repos.find(repo => repo.html_url === project.repositoryUrl);
  if (!repo) throw new Error(`Selected repository missing: ${project.repositoryUrl}. Review before removing it.`);
  project.category = [repo.language || 'Project'];
}
await writeFile(file, '// Six selected projects; Setu stays first.\nconst Menu = ' + JSON.stringify(projects, null, 2) + ';\nexport default Menu;\n');
console.log(`Updated ${projects.length} projects; Setu remains first. Curated selection preserved.`);
