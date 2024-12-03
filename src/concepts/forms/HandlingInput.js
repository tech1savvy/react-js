import React, { useState } from 'react';

const HandlingInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default HandlingInput;
