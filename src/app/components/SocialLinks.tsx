export default function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-gray-100 dark:bg-gray-600 rounded-full px-5 py-2 flex gap-10 items-center">
        <a href="https://github.com/KichdiPatel" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
          GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/apatel2/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
          LinkedIn
        </a>
        
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
          X
        </a>
      </div>
    </div>
  );
}
