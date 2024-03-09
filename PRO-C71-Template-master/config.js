import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDEXsYmRKiJIFRCkOzalX5vRSRPNrwUcog",
    authDomain: "e-ride-cc14d.firebaseapp.com",
    projectId: "e-ride-cc14d",
    storageBucket: "e-ride-cc14d.appspot.com",
    messagingSenderId: "950487850151",
    appId: "1:950487850151:web:6935bbac62450f3617cf82"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
