import React from 'react';
import logo from '../assets/mintaLogo.png'; // Adjust the path as needed

function Header({ children }) {
  return (
    <div className="p-4 mx-4 md:mx-8 lg:mx-32">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-16 w-16" />
          </div>
          <div className="ml-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">MINTA</h1>
            <p className="text-gray-400 text-sm md:text-base">Machine Intelligence NFT Token Artisan</p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Header;