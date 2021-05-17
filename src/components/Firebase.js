import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBTIt_twvGQtNXII93UuSazWEa2CFhiGj8",
  authDomain: "xjox360.firebaseapp.com",
  databaseURL: "https://xjox360-default-rtdb.firebaseio.com",
  projectId: "xjox360",
  storageBucket: "xjox360.appspot.com",
  messagingSenderId: "102686402940",
  appId: "1:102686402940:web:5ff5a4cfa1b52509999cf9",
  measurementId: "G-E10DYJ0HMN",
};
// Initialize Firebase
const firebaseData = firebase.initializeApp(firebaseConfig);
console.log(firebaseData);
const db = firebaseData.firestore();
export { db };

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
