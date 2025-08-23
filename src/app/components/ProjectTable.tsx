import Link from 'next/link';

interface ProjectConfig {
  title: string;
  type: string;
  description: string;
  url: string;
}

interface ProjectTableProps {
  projects: ProjectConfig[];
}

export default function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="mt-4 w-full">
      <table className="w-full [&_th]:py-2 [&_td]:py-2 [&_th]:text-gray-500 [&_th]:pr-8 [&_td]:pr-8">
        <thead>
          <tr className="border-b border-foreground">
            <th className="text-left font-normal w-1/7">Title</th>
            <th className="text-left font-normal w-1/9">Type</th>
            <th className="text-left font-normal">Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b border-foreground group">
              <td className="group-hover:text-blue-600 transition-colors">
                <Link href={project.url} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </Link>
              </td>
              <td className="group-hover:text-blue-600 transition-colors">
                <Link href={project.url} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
                  {project.type}
                </Link>
              </td>
              <td className="group-hover:text-blue-600 transition-colors">
                <Link href={project.url} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
                  {project.description}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
