// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHy9klyM9x08JL9D01c_anaO7Lg_8l_eY",
  authDomain: "product-beta-d831a.firebaseapp.com",
  databaseURL: "https://product-beta-d831a-default-rtdb.firebaseio.com",
  projectId: "product-beta-d831a",
  storageBucket: "product-beta-d831a.appspot.com",
  messagingSenderId: "707141456549",
  appId: "1:707141456549:web:1b2da2788adc83730fb34c",
  measurementId: "G-NDE86TJH6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);