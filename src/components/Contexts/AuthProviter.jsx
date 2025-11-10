import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProviter = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  


  const authInfo = {

  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviter;
