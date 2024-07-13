// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-75edf.firebaseapp.com",
  projectId: "mern-blog-75edf",
  storageBucket: "mern-blog-75edf.appspot.com",
  messagingSenderId: "391088564371",
  appId: "1:391088564371:web:51847a46f493b3da72c566",
  measurementId: "G-MMQSHXDRJY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//console.log(firebaseConfig)
const analytics = getAnalytics(app);