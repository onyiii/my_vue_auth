import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";
import firebaseConfig from "./firebaseConfig";

const app = createApp(App);
app.use(store), app.use(router), app.use(firebaseConfig);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
