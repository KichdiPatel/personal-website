# Ayan Patel - Personal Website

Link: 

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Content**: MDX for project pages
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Projects

To add a new project:

1. Create a new folder in `src/app/projects/[project-name]/`
2. Add a `config.json` file with metadata:
   ```json
   {
     "title": "Project Name",
     "type": "Web App",
     "description": "Brief project description",
     "url": "/projects/project-name"
   }
   ```
3. Create a `page.mdx` file with your project content using markdown syntax if necessary.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment
Deploy through the Vercel UI.

