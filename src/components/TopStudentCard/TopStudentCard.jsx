import React from 'react';
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";


const TopStudentCard = ({ topStudentData }) => {
  const {
    _id,
    profileimage,
    name,
    subject,
    studyMode,
    availabilityTime,
    location,
    experienceLevel,
    rating
  } = topStudentData;
  // console.log(topStudentData)
  return (
    <div className="shadow-sm p-10 text-center">
      <div className="flex items-center justify-center mb-2">
        <img className="w-24 h-24 rounded-full" src={profileimage} alt="" />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-500 mb-1">{subject}</p>
        <p className="text-gray-500 mb-1">
          Study Mode
          <br />
          {studyMode}
        </p>
        <p className="text-gray-500 mb-1">{experienceLevel}</p>
        <p className="flex justify-center items-center mb-1"><FaStar className="text-yellow-400 mr-2" /> { rating}</p>
      </div>
      <Link to={`/find-partner-details/${_id}`} className="bg-blue-600 rounded text-white py-3 px-5 font-semibold">View Details</Link>
    </div>
  );
};

export default TopStudentCard;