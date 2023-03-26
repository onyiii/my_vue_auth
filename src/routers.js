import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ContactPage from "./components/ContactPage.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ProductPage from "./components/ProductPage.vue";

import NotFound from "./components/NotFound.vue";

import store from "./store";

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
    meta: {
      isAuth: false,
      requireGuest: true,
    },
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
    meta: {
      isAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    if (!store.state.user.isAuthenticated) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requireGuest)) {
    if (store.state.user.isAuthenticated) {
      next({
        path: "/products",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
