import React, { useState } from 'react';
import PincodeForm from './PincodeForm';
import PincodeDetails from './PincodeDetails';
import Loader from './Loader';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPincodeDetails = async (pincode) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      if (data[0].Status === 'Error') {
        setError('Invalid Pincode');
        setDetails(null);
      } else {
        setDetails(data[0].PostOffice);
      }
    } catch (err) {
      setError('Failed to fetch data');
      setDetails(null);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      {!details && (
        <PincodeForm setPincode={setPincode} fetchPincodeDetails={fetchPincodeDetails} />
      )}
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}
      {details && (
        <div>
          <div className="info">
            <p><strong>Pincode:</strong> {pincode}</p>
            <p><strong>Message:</strong> Number of pincode ({details.length}) found </p>
          </div>
          <PincodeDetails details={details} />
        </div>
      )}
    </div>
  );
}

export default App;
