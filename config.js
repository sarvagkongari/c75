import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBOOfd0v0bRX1akc0ZCAy4F0klqc_1rFDo",
  authDomain: "e-ride-35fe6.firebaseapp.com",
  projectId: "e-ride-35fe6",
  storageBucket: "e-ride-35fe6.appspot.com",
  messagingSenderId: "50655926867",
  appId: "1:50655926867:web:497dd482c12c46bd8244a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
