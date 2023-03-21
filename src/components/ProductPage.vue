<template>
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { useStore } from "vuex";
// //import { useRouter } from "vue-router";
// import { computed } from "vue";
// import { getAuth } from "firebase/auth";

//import axios from "axios";
export default {
  //import axios from "axios";

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

//   created() {
//     this.getProducts();
//   },
//   computed: {
//     ...mapGetters(["products"]),
//   },
//   methods: {
//     ...mapActions(["getProducts"]),
//   },
</script>

<style>
.cards {
  height: 100px;
  width: 200px;
}
</style>

<!-- const store = useStore() const router = useRouter() auth.onAuthStateChanged(user
=> { store.dispatch("fetchUser", user); }); const user = computed(() => { return
store.getters.user; }); -->
