// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIbQoVNwnlBZ1CJBRHizVQ4Lz_E83ie8w",
  authDomain: "cofee-store-2.firebaseapp.com",
  projectId: "cofee-store-2",
  storageBucket: "cofee-store-2.firebasestorage.app",
  messagingSenderId: "606621319145",
  appId: "1:606621319145:web:7cd5d32e7a1d350caa9578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
