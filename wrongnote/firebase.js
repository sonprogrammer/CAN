// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7NrWC_sFVjPhXeNqP_r2dL0uhdY377I",
  authDomain: "wrongnote-2e7ad.firebaseapp.com",
  projectId: "wrongnote-2e7ad",
  storageBucket: "wrongnote-2e7ad.appspot.com",
  messagingSenderId: "41014683596",
  appId: "1:41014683596:web:7c336d0971d5f1a0225f69",
  measurementId: "G-NW22H776MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;