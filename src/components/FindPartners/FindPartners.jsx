import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import FindPartnerCard from "../FindPartnerCard/FindPartnerCard";
import MyContainer from "../MyContainer/MyContainer";
import { AuthContext } from "../Contexts/AuthContext";
import { PuffLoader } from "react-spinners";

const FindPartners = () => {
  const datas = useLoaderData();
  // const { loading } = use(AuthContext);
  const [partners, setPartners] = useState(datas);
  const [loading, setLoading] = useState(false)

  const handleSearch = (e)=> {
    e.preventDefault()
    const search_text = e.target.search.value;
    setLoading(true)
    // console.log(search_text)
    fetch(`http://localhost:3000/search?search=${search_text}`)
    .then(res => res.json())
    .then(data => {
     setPartners(data)
     setLoading(false)
    })
  }
  return (
    <MyContainer>
      <div>
        <h1 className="text-5xl font-bold text-red-400 text-center my-10">
          Find Your Study Patrners
        </h1>
        <form onSubmit={handleSearch} className="flex justify-end mb-10">
          <div className="join">
            <div>
              <div>
                <input name="search" className="input join-item" placeholder="Search" />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </form>

        {loading ? (
          <div className="w-[200px] h-screen mx-auto flex items-center justify-center">
            <PuffLoader />
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-28">
            {partners.map((fidnData) => (
              <FindPartnerCard
                key={fidnData._id}
                fidnData={fidnData}
              ></FindPartnerCard>
            ))}
          </div>
        )}
      </div>
    </MyContainer>
  );
};

export default FindPartners;
