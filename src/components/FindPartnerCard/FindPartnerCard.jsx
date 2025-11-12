import React from "react";
import MyContainer from "../MyContainer/MyContainer";

// availabilityTime: "Evening 6–9 PM";
// email: "aisha.rahman@example.com";
// experienceLevel: "Intermediate";
// id: "1";
// location: "Dhaka, Bangladesh";
// name: "Aisha Rahman";
// patnerCount: 0;
// profileimage: "https://i.ibb.co/xgZL6rX/profile1.jpg";
// rating: 0;
// studyMode: "Online";
// subject: "Mathematics";
// _id: "69142fc0dc6d2a88374091c1";

const FindPartnerCard = ({ fidnData }) => {
  const {
    profileimage,
    name,
    subject,
    studyMode,
    availabilityTime,
    location,
    experienceLevel,
  } = fidnData;
  return (
    <div className="shadow-sm p-10">
      <div>
        <img className="w-24 h-24 rounded-full" src={profileimage} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{subject}</p>
      <p>
        Study Mode
        <br />
        {studyMode}
      </p>
      <p>{availabilityTime}</p>
      <p>{location}</p>
      <p>{experienceLevel}</p>
    </div>
  );
};

export default FindPartnerCard;
