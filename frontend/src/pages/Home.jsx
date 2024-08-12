import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import AccountForm from '../components/AccountForm.jsx';
import PromptForm from '../components/PromptForm.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import LoadingAnimation from '../components/LoadingAnimation.jsx';
import MintButton from '../components/MintButton.jsx';

function Home() {
  const [account, setAccount] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const generateImages = async (prompt) => {
    setLoading(true);
    // Call backend to generate images
    const response = await fetch('/api/generate', { method: 'POST', body: JSON.stringify({ prompt }) });
    const data = await response.json();
    setImages(data.images);
    setLoading(false);
  };

  const selectImage = (image) => {
    setSelectedImages((prev) => (prev.includes(image) ? prev.filter((img) => img !== image) : [...prev, image]));
  };

  const mintNFTs = async () => {
    // Call backend to mint NFTs with selected images
    const response = await fetch('/api/mint', { method: 'POST', body: JSON.stringify({ images: selectedImages, account }) });
    const data = await response.json();
    if (data.success) {
      alert('Minting successful!');
    } else {
      alert('Minting failed.');
    }
  };

  return (
    <div>
      <Header />
      <br />
      <AccountForm setAccount={setAccount} />
      <PromptForm generateImages={generateImages} />
      {loading ? <LoadingAnimation /> : <ImageGrid images={images} selectImage={selectImage} />}
      {images.length > 0 && <MintButton mintNFTs={mintNFTs} />}
    </div>
  );
}

export default Home;
