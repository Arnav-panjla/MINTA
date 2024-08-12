import React from 'react';

function MintButton({ mintNFTs }) {
  return (
    <button onClick={mintNFTs} className="mt-4 bg-neon-blue text-black p-2 rounded-full hover:bg-black hover:text-neon-blue transition-colors">
      Mint
    </button>
  );
}

export default MintButton;
