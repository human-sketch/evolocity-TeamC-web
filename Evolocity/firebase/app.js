// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOH2Bn6EbGpXusGuVq0fOOSlZqq_JfWy8",
  authDomain: "evolocity-data.firebaseapp.com",
  databaseURL: "https://evolocity-data-default-rtdb.firebaseio.com",
  projectId: "evolocity-data",
  storageBucket: "evolocity-data.appspot.com",
  messagingSenderId: "935044556246",
  appId: "1:935044556246:web:4c7058b473c715d3307077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var input = document.getElementById("select"); 

function insetData() {
    set(ref())
}