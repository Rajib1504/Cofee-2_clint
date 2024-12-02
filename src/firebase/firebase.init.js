// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4YtL946KwmIsxVnXmDceinFEmSVvLpk",
  authDomain: "coffee-store-fdfec.firebaseapp.com",
  projectId: "coffee-store-fdfec",
  storageBucket: "coffee-store-fdfec.firebasestorage.app",
  messagingSenderId: "38208347968",
  appId: "1:38208347968:web:fea974cfed82c689b064a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
