"use client";

export default function ProjectTable() {
  const handleRowClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          <tr 
            className="border-b border-foreground cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => handleRowClick('/projects/project-1')}
          >
            <td>Example Project</td>
            <td>Web App</td>
            <td>A sample project description goes here.</td>
          </tr>
          <tr 
            className="border-b border-foreground cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => handleRowClick('/projects/project-2')}
          >
            <td>Another Project</td>
            <td>Mobile App</td>
            <td>Another sample project description.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
