import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyB_i9CbEUj6GMM19NxzhMoObY7DhhShFtM",
  authDomain: "chat-application-e66d6.firebaseapp.com",
  databaseURL: "https://chat-application-e66d6-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();