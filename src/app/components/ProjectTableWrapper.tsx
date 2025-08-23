import fs from 'fs';
import path from 'path';
import ProjectTable from './ProjectTable';

interface ProjectConfig {
  title: string;
  type: string;
  description: string;
  url: string;
}

export default function ProjectTableWrapper() {
  const projectsDir = path.join(process.cwd(), 'src/app/projects');
  const projectFolders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'layout')
    .map(dirent => dirent.name);

  const projects: ProjectConfig[] = projectFolders.map(folderName => {
    const configPath = path.join(projectsDir, folderName, 'config.json');
    try {
      const configContent = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configContent);
    } catch (error) {
      // Fallback if config.json doesn't exist
      return {
        title: folderName,
        type: 'Project',
        description: 'No description available.',
        url: `/projects/${folderName}`
      };
    }
  });

  const reversedProjects = projects.reverse();

  return <ProjectTable projects={reversedProjects} />;
}
