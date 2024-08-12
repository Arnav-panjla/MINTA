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
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto mt-8 p-4 border border-neon-blue text-neon-blue rounded-full">
      <input
        type="text"
        value={prompt}
        onChange={handleChange}
        placeholder="Enter image prompt"
        className="w-full bg-black p-2 rounded-full text-neon-blue focus:outline-none"
      />
      <button type="submit" className="mt-2 bg-neon-blue text-black p-2 rounded-full hover:bg-black hover:text-neon-blue hover:border hover:border-neon-blue transition-all duration-300">
        Generate
      </button>
    </form>
  );
}

export default PromptForm;
