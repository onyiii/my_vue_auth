import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
  },
  mutations: {
    //   setCurrentUser(state, user) {
    //     state.currentUser = user;
    //   },
    //   setIsLoggedIn(state, isLoggedIn) {
    //     state.isLoggedIn = isLoggedIn;

    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("https://dummyjson.com/products");
      commit("setProducts", response.data);
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
});

export default store;
