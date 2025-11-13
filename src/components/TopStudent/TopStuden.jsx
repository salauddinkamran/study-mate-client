import React, { use } from "react";
import TopStudentCard from "../TopStudentCard/TopStudentCard";
import MyContainer from "../MyContainer/MyContainer";

const TopStuden = ({ TopStudentPromise }) => {
  const topStudents = use(TopStudentPromise);
  return (
    <MyContainer>
    <div className="my-28">
      <h2 className="text-4xl font-semibold mb-10">Top Study Partner</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {topStudents.map((topStudentData) => (
          <TopStudentCard
            key={topStudentData._id}
            topStudentData={topStudentData}
          ></TopStudentCard>
        ))}
      </div>
    </div>
    </MyContainer>

  );
};

export default TopStuden;
