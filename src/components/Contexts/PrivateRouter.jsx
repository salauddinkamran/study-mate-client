import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import { PuffLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location)
  if (loading) {
    return (
      <div className="w-[200px] h-screen mx-auto flex items-center justify-center">
        <PuffLoader />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
