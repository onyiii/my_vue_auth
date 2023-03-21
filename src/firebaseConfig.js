import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHbpCfr3-Raw-6TXfi7RELcvn_y_59GKA",
  authDomain: "my-vue-app-59bc4.firebaseapp.com",
  projectId: "my-vue-app-59bc4",
  storageBucket: "my-vue-app-59bc4.appspot.com",
  messagingSenderId: "924770135381",
  appId: "1:924770135381:web:de602123b33d377f1553dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export default { app, auth };
