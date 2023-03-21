import { createStore } from "vuex";
import axios from "axios";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const store = createStore({
  state: {
    products: [],
    user: {
      isLoggedIn: false,
      data: null,
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOGGED_IN(state, value) {
      state.user.isLoggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      commit("SET_PRODUCTS", products);
      console.log(products);
    },

    async register(context, { email, password }) {
      const auth = getAuth;
      const response = await createUserWithEmailAndPassword(
        auth(),
        email,
        password
      );
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("Unable to register user");
      }
    },

    async login(context, { email, password }) {
      const auth = getAuth;
      const response = await signInWithEmailAndPassword(
        auth(),
        email,
        password
      );
      if (response) {
        context.commit("SET_USER", response.user);
      } else {
        throw new Error("login failed");
      }
    },

    async logout(context) {
      const auth = getAuth;
      await signOut(auth);
      context.commit("SET_USER", null);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    user(state) {
      return state.user;
    },
  },
});

export default store;
