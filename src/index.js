import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD88V6IiK8-eDK1tlu3PwIH2ZgNHLrlD2M",
  authDomain: "pointsport-heguilen.firebaseapp.com",
  projectId: "pointsport-heguilen",
  storageBucket: "pointsport-heguilen.appspot.com",
  messagingSenderId: "281257281846",
  appId: "1:281257281846:web:a28bc599749945510b0b97"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


