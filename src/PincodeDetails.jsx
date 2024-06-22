import React, { useState } from 'react';
import './PincodeDetails.css'

const PincodeDetails = ({ details }) => {
  const [filter, setFilter] = useState('');

  const filteredDetails = details.filter((office) =>
    office.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredDetails.length === 0 ? (
        <div>Couldn’t find the postal data you’re looking for…</div>
      ) : (
        <ul className='DetailsCard'>
          {filteredDetails.map((office) => (
            <li key={office.Name}>
              <p>Name: {office.Name}</p>
              <p>Brach Type: {office.BranchType}</p>
              <p>Delivery Status: {office.DeliveryStatus}</p>
              <p>District: {office.District}</p>
              <p>Division: {office.Division}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PincodeDetails;