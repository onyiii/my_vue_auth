<template>
  <div
    class="navbar navbar-expand-lg bg-body-tertiary container-fluid w-100 h-30 d-flex bg-dark fs-3 mb-1"
  >
    <div class="navbar-brand mr-auto">
      <img :src="img" />
      <span class="text-warning">Gadgets</span>
    </div>
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <nav
      class="collapse navbar-collapse justify-content-evenly"
      id="navbarSupportedContent"
    >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/"
        exact
        :class="{ active: $route.path === '/' }"
        >Home</router-link
      >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/products"
        exact
        :class="{ active: $route.path === '/products' }"
        >Product</router-link
      >
      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/contact"
        exact
        :class="{ active: $route.path === '/contact' }"
        >Contact Us</router-link
      >

      <router-link
        class="text-decoration-none text-warning"
        style="--bs-text-opacity: 0.75"
        to="/login"
        exact
        :class="{ active: $route.path === '/login' }"
        v-if="!isLoggedIn"
        >Login</router-link
      >

      <router-link
        class="text-decoration-none border border-3 border-warning bg-warning fw-bold text-dark"
        to="/"
        style="--bs-text-opacity: 0.75"
        @click.prevent="signout"
        >Log Out</router-link
      >
    </nav>
  </div>
</template>

<script>
import logo1 from "../assets/logo1.png";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import router from "@/routers";
import { useStore } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      img: logo1,
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signout = async () => {
      await store.dispatch("logout");
      router.push("/");
    };
    return { user, signout };
  },
};
</script>

<style lang="css">
img {
  width: 50px;
  height: 50px;
}

.active {
  font-weight: bold;
}
</style>
