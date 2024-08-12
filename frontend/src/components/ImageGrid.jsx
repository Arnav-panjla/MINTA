import React from 'react';
import ImageCard from './ImageCard.jsx';

function ImageGrid({ images, selectImage }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} selectImage={selectImage} />
      ))}
    </div>
  );
}

export default ImageGrid;
