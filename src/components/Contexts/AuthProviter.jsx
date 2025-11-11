import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProviter = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, passowrd) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passowrd);
  };

  const signInUser = (email, passowrd) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passowrd);
  };

  const updateUser = (updateData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updateData)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("current user", currentUser)
      setLoading(true)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    updateUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviter;
