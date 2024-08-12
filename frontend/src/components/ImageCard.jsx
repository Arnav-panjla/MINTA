import React from 'react';

function ImageCard({ image, selectImage }) {
  return (
    <div className="border border-neon-blue rounded-md p-2 transform hover:scale-105 transition-transform" onClick={() => selectImage(image)}>
      <img src={image} alt="Generated" className="w-full h-full object-cover rounded-md" />
    </div>
  );
}

export default ImageCard;
