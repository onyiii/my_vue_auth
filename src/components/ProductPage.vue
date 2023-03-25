<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
      class="card d-inline-flex justify-content-evenly m-4 py-2"
      style="width: 22rem; height: 20rem"
    >
      <div>
        <div>
          <img :src="product.thumbnail" alt="" class="card-img-top cards" />
        </div>
        <div class="card-body">
          <div class="card-title">Brand: {{ product.brand }}</div>
          <div class="card-title">Model: {{ product.title }}</div>
          <div>Price: ${{ product.price }}</div>
          <div>
            <a
              href="#"
              class="btn btn-warning text-dark"
              style="--bs-text-opacity: 0.5"
              >More Details</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

import { getAuth } from "firebase/auth";

export default {
  name: "ProductPage",

  setup() {
    const auth = getAuth();
    auth.onAuthStateChanged((products) => {
      store.dispatch("getProducts", products);
    });
  },
  computed: {
    products() {
      return store.getters.products;
    },
  },
};
</script>

<style>
.cards {
  height: 100px;
  width: 200px;
}
</style>
