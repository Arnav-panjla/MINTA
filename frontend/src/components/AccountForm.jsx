import React, { useState } from 'react';

function AccountForm({ setAccount }) {
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount(address);
  };

  return (
    <form onSubmit={handleSubmit} className="absolute my-4 top-24 right-16">
      <input
        type="text"
        value={address}
        onChange={handleChange}
        placeholder="Enter account address"
        className="border border-gray-500 text-gray-500 bg-black p-2 rounded-md"
      />
    </form>
  );
}

export default AccountForm;
