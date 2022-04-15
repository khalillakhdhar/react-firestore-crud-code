import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
};

firebase.initializeApp(config);

export default firebase.firestore();
