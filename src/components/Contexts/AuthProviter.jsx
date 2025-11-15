import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

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

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      // console.log("current user", currentUser)
      setLoading(false)
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
    updateUser,
    signOutUser,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviter;
