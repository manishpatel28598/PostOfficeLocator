import React, { useState } from 'react';
import './PincodeForm.css';
const PincodeForm = ({ setPincode, fetchPincodeDetails }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.length !== 6 || isNaN(inputValue)) {
        alert('Please enter a valid 6-digit pincode');
        return;
      }
      setPincode(inputValue);
      fetchPincodeDetails(inputValue);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Enter Pincode</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Pincode"
        />
        <button type="submit">Lookup</button>
      </form>
    );
  };
  
  export default PincodeForm;