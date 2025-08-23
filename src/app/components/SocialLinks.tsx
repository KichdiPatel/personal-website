export default function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-gray-200 rounded-full px-5 py-2 flex gap-10 items-center">
        <a href="https://github.com/KichdiPatel" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors font-medium">
          GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/apatel2/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors font-medium">
          LinkedIn
        </a>
        
        <a href="https://x.com/KichdiPatel" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors font-medium">
          X
        </a>
      </div>
    </div>
  );
}
