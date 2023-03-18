import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products;
      commit("SET_PRODUCTS", products);
      console.log(products);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
});

export default store;
