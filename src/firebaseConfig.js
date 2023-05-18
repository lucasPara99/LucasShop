// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlV5pU6rkGBumdgQfwL1GptP4emGmhb5E",
  authDomain: "ecommerce-react-8ce55.firebaseapp.com",
  projectId: "ecommerce-react-8ce55",
  storageBucket: "ecommerce-react-8ce55.appspot.com",
  messagingSenderId: "539675916543",
  appId: "1:539675916543:web:4f3732616095849fdff4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)