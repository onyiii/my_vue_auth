<template>
  <div
    v-for="product in products"
    :key="product.id"
    class="card d-flex d-inline-flex border-none m-3 h-10"
    style="width: 18rem"
  >
    <ul>
      <li><img :src="product.thumbnail" alt="" class="card-img-top h-25" /></li>
      <div class="card-body">
        <li class="card-title">Brand: {{ product.brand }}</li>
        <li class="card-title">Model: {{ product.title }}</li>

        <li>Price: ${{ product.price }}</li>
        <li>
          <a
            :href="product.description"
            class="btn btn-warning text-dark"
            style="--bs-text-opacity: 0.5"
            >More Details</a
          >
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

//import axios from "axios";
export default {
  name: "ProductPage",
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
