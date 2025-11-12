import React from "react";

const MyContainer = ({ className, children }) => {
  return <div className={`${className} xl:max-w-10/12 xl:mx-auto px-10`}>{children}</div>;
};

export default MyContainer;
