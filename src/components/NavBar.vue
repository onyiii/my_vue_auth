<template>
  <nav
    class="navbar navbar-expand-lg container-fluid w-100 h-30 d-flex bg-dark fs-3 mb-1"
  >
    <div class="navbar-brand">
      <img :src="img" />
      <span class="text-warning">Gadgets</span>
    </div>
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-evenly"
      id="navbarSupportedContent"
    >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/"
        >Home</router-link
      >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/products"
        >Product</router-link
      >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/contact"
        >Contact Us</router-link
      >

      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/login"
        v-if="!isLoggedIn"
        >Login</router-link
      >

      <router-link
        class="text-decoration-none border border-3 border-warning bg-warning fw-bold text-dark"
        to="/"
        style="--bs-text-opacity: 0.75"
        >Log Out</router-link
      >

      <!-- <router-link class="text-decoration-none" to="/products" v-if="isLoggedIn"
      >Products</router-link
    > -->
    </div>
  </nav>
</template>

<script>
import logo1 from "../assets/logo1.png";
export default {
  name: "NavBar",

  data() {
    return {
      img: logo1,
    };
  },
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
}

a.active {
  font-weight: 400px;
  color: aqua;
}
</style>
