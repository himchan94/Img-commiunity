import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCq7y7qef20IVBLUqklCRCRZN7nce4Ot3A",
  authDomain: "img2-d9b3a.firebaseapp.com",
  projectId: "img2-d9b3a",
  storageBucket: "img2-d9b3a.appspot.com",
  messagingSenderId: "976629379937",
  appId: "1:976629379937:web:645939e57c5ec46a7d8b20",
  measurementId: "G-T8PWW4MDTY",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
const analytics = firebase.analytics();

export { auth, apiKey, firestore, storage, realtime, analytics };
