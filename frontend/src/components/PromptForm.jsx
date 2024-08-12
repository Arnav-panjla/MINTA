import React, { useState } from 'react';

function PromptForm({ generateImages }) {
  const [prompt, setPrompt] = useState('');

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImages(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto mt-8 p-2 border border-neon-blue text-neon-blue rounded-full flex items-center">
      <input
        type="text"
        value={prompt}
        onChange={handleChange}
        placeholder="Enter image prompt"
        className="flex-grow bg-black p-2 rounded-l-full text-neon-blue focus:outline-none"
      />
      <button type="submit" className="ml-2 bg-neon-blue text-black p-2 rounded-full hover:bg-black hover:text-neon-blue hover:border hover:border-neon-blue transition-all duration-300">
        Generate
      </button>
    </form>
  );
}

export default PromptForm;
