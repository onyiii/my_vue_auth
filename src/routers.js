import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ProductPage from "./components/ProductPage.vue";

import NotFound from "./components/NotFound.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//import store from "./store";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products",
    name: "ProductPage",
    component: ProductPage,
    // meta: {
    //   requiresAuth: true,
    // },
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next("/products");
    } else {
      alert("Log In to view Products");
      next();
    }
  } else {
    next();
  }
});

export default router;
