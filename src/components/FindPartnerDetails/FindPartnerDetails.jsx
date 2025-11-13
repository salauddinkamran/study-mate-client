import React from 'react';

const FindPartnerDetails = ({ fidnData }) => {
  const {name} = fidnData
  return (
    <div>
      <h1 className='text-7xl font-bold mt-20'>Find Partner Details</h1>
      <p>{ name}</p>
    </div>
  );
};

export default FindPartnerDetails;