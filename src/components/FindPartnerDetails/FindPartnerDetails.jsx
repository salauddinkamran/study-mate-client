import React, { use, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

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

const FindPartnerDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/partner/${id}`, {
      headers: {
        authorization: "Helli",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  const { user } = use(AuthContext);
  // const data = useLoaderData();
  // console.log(data.result);
  const {
    name,
    profileimage,
    subject,
    studyMode,
    rating,
    location,
    availabilityTime,
    email,
    experienceLevel,
    patnerCount,
  } = data.result;

  const handleSendRequest = async () => {
    const newConnection = {
      senderEmail: user?.email,
      partnerId: data.result._id,
      name,
      profileimage,
      subject,
      studyMode,
      rating,
      location,
      availabilityTime,
      experienceLevel,
      partnerEmail: email,
    };

    fetch("http://localhost:3000/partner", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newConnection),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Partner request sent successfully!");
        } else {
          toast("Request sent!");
        }
      });
  };
  return (
    <div>
      {" "}
      <div className="md:w-10/12 lg:w-8/12 md:mx-auto my-20 shadow-sm p-2 md:p-10 rouded">
        <div className="md:flex gap-10">
          <div className="w-40 h-40 object-cover">
            <img
              className="w-full h-full rounded-full"
              src={profileimage}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold">{name}</h3>
            <div className="mt-5 flex gap-4">
              <span className="bg-gray-100 px-5 py-2 rounded-full text-gray-600 font-semibold">
                {subject}
              </span>
              <span className="bg-gray-100 px-5 py-2 rounded-full text-gray-600 font-semibold">
                {studyMode}
              </span>
            </div>
            <p className="flex items-center gap-2 mt-3 font-bold">
              <FaStar className="text-yellow-500" />
              {rating}
            </p>
            <p className="flex items-center gap-2 mt-3 font-bold">
              <MdLocationPin /> {location}
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded p-5 mt-5 lg:flex lg:justify-between gap-5">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">About {name}</h3>
            <p className="text-gray-700 text-lg ">
              I am dedicated {subject} tutor with 4 year of experience, I
              specialize in helping students improve their problem-solving
              slills.
            </p>
            <button
              onClick={handleSendRequest}
              className="btn btn-primary border-0 mt-3 mb-5 lg:mb-0"
            >
              Send Partner Request
            </button>
          </div>
          <div className="md:w-1/2 flex gap-3 md:gap-10">
            <div className="space-y-1">
              <p className="font-semibold">Subject</p>
              <p className="font-semibold">Experience</p>
              <p className="font-semibold">Availability</p>
              <p className="font-semibold">Study Mode</p>
              <p className="font-semibold">Email</p>
              <p className="font-semibold">Patner Count</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">{subject}</p>
              <p className="font-semibold">{experienceLevel}</p>
              <p className="font-semibold">{availabilityTime}</p>
              <p className="font-semibold">{studyMode}</p>
              <p className="font-semibold">{email}</p>
              <p className="font-semibold">{patnerCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPartnerDetails;
