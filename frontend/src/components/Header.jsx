import React from 'react';

function Header() {
  return (
    <div className="flex items-center p-4">
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="h-16 w-16" />
      </div>
      <div className="ml-4">
        <h1 className="text-6xl font-bold text-white">MINTA</h1>
        <p className="text-gray-400">Machine Intelligence NFT Token Artisan</p>
      </div>
    </div>
  );
}

export default Header;
