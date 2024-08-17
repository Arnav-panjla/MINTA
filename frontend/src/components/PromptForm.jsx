import React, { useState } from 'react';

function PromptForm() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/generate-image');
      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-8 p-2 border border-neon-blue text-neon-blue rounded-full">
      <form onSubmit={handleSubmit} className="w-full flex items-center mb-1">
        <input
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Enter image prompt"
          className="flex-grow bg-black p-2 rounded-l-full text-neon-blue focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 bg-neon-blue text-black p-2 rounded-full hover:bg-black hover:text-neon-blue hover:border hover:border-neon-blue transition-all duration-300"
        >
          Generate
        </button>
      </form>
      {loading && <div className="text-neon-blue">Generating image...</div>}
      {imageUrl && <img src={imageUrl} alt="Generated" className="mt-4 border border-neon-blue" />}
    </div>
  );
}

export default PromptForm;
