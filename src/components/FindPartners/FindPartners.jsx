import React from "react";
import { useLoaderData } from "react-router";
import FindPartnerCard from "../FindPartnerCard/FindPartnerCard";
import MyContainer from "../MyContainer/MyContainer";

const FindPartners = () => {
  const datas = useLoaderData();
  // console.log(datas);
  return (
    <MyContainer>
      <div>
        <h1 className="text-5xl font-bold text-red-400 text-center my-10">
          Find Your Study Patrners
        </h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-28">
          {datas.map((fidnData) => (
            <FindPartnerCard
              key={fidnData._id}
              fidnData={fidnData}
            ></FindPartnerCard>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default FindPartners;
