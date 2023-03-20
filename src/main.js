import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHbpCfr3-Raw-6TXfi7RELcvn_y_59GKA",
  authDomain: "my-vue-app-59bc4.firebaseapp.com",
  projectId: "my-vue-app-59bc4",
  storageBucket: "my-vue-app-59bc4.appspot.com",
  messagingSenderId: "924770135381",
  appId: "1:924770135381:web:de602123b33d377f1553dc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);
app.use(store), app.use(router);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
