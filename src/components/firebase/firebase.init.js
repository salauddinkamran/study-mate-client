// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

  // VITE_apiKey=AIzaSyC1dSjR7aRBOWLFwVC4DcYncKDFddSfYZc
  // VITE_authDomain=study-mate-46ac8.firebaseapp.com
  // VITE_projectId=study-mate-46ac8
  // VITE_storageBucket=study-mate-46ac8.firebasestorage.app
  // VITE_messagingSenderId=888375550463
  // VITE_appId=1:888375550463:web:e3e7f458d2f52ae4cd47c

// const firebaseConfig = {
//   apiKey: "AIzaSyC1dSjR7aRBOWLFwVC4DcYncKDFddSfYZc",
//   authDomain: "study-mate-46ac8.firebaseapp.com",
//   projectId: "study-mate-46ac8",
//   storageBucket: "study-mate-46ac8.firebasestorage.app",
//   messagingSenderId: "888375550463",
//   appId: "1:888375550463:web:e3e7f458d2f52ae4cd47ca"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);