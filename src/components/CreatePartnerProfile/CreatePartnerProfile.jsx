import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const CreatePartnerProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      availabilityTime: e.target.availabilityTime.value,
      experienceLevel: e.target.experienceLevel.value,
      email: e.target.email.value,
      profileimage: e.target.profileimage.value,
      studyMode: e.target.studyMode.value,
      location: e.target.location.value,
      rating: parseFloat(e.target.rating.value),
      partnerCount: parseInt(e.target.partnerCount.value),
    };

    fetch("http://localhost:3000/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Study Partner Profile create done")
        console.log(data)
      })
      .catch((error) => {
        toast(error.message);
      });
    // console.log(formData);
  };
  return (
    <div className="mb-20">
      <h3 className="text-5xl font-medium text-center mb-5 my-20">
        Create Your Study Partner Profile.
      </h3>
      <div className="w-11/12 sm:w-8/12 md:w-6/12 xl:w-3/12 mx-auto items-center flex">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset space-y-2">
                <div>
                  <label className="label text-lg font-semibold">Name</label>
                  <input type="text" className="input w-full" name="name" />
                </div>
                <div>
                  <label className="label text-lg font-semibold">Subject</label>
                  <input
                    type="subject"
                    className="input w-full"
                    name="subject"
                  />
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Availablity Time
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    name="availabilityTime"
                  />
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Experience Lavel
                  </label>
                  <select
                    name="experienceLevel"
                    className="select w-full rounded focus:border-0"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <div>
                  <label className="label text-lg font-semibold">Email</label>
                  <input type="email" className="input w-full" name="email" />
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    name="profileimage"
                  />
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Study Mode
                  </label>
                  <select
                    name="studyMode"
                    className="select w-full rounded focus:border-0"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Both</option>
                  </select>
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Location
                  </label>
                  <input type="text" className="input w-full" name="location" />
                </div>
                <div>
                  <label className="label text-lg font-semibold">Rating</label>
                  <input type="text" className="input w-full" name="rating" />
                </div>
                <div>
                  <label className="label text-lg font-semibold">
                    Pratner Count
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    name="partnerCount"
                    placeholder="0"
                  />
                </div>
                <button className="btn btn-neutral mt-4">Create Profile</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;


