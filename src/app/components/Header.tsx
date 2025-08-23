"use client";

import { useState } from "react";

export default function Header() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('acpatel@bu.edu');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <header className="flex justify-between items-center">
      <h1 className="font-semibold text-lg">Ayan Patel</h1>
      <button 
        onClick={handleCopyEmail}
        className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-500 hover:text-black hover:border-gray-200 transition-colors font-medium relative overflow-hidden"
      >
        <span 
          className={`transition-opacity duration-300 ${isCopied ? 'opacity-0' : 'opacity-100'}`}
        >
          Copy Email
        </span>
        <span 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
        >
          Copied!
        </span>
      </button>
    </header>
  );
}
