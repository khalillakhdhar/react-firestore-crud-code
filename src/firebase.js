import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyC0K0GQgZU_AxY0Ynl8dhlm8F6VQSPUEDM",
  authDomain: "pointage-e68de.firebaseapp.com",
  projectId: "pointage-e68de",
  storageBucket: "pointage-e68de.appspot.com",
  messagingSenderId: "21481574273",
  appId: "1:21481574273:web:d2e21ed76d81fe9f346280",
  measurementId: "G-4CC0QLNJMJ"
};

firebase.initializeApp(config);

export default firebase.firestore();
