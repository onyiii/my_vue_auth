<template>
  <div class="login">
    <form @submit.prevent="Login" class="bg-dark text-warning">
      <div class="display-6">Login</div>
      <div>
        <input
          type="email"
          id="email"
          class="border border-warning border-2"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <input
          class="border border-warning border-2"
          placeholder="Enter your Password"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div>
        Not Registered Yet?
        <span>
          <router-link
            to="/signup"
            class="text-decoration-none text-warning fw-bold"
            >Sign Up</router-link
          >
        </span>
      </div>

      <button
        class="btn bg-dark text-warning border border-2 border-warning mb-2"
        type="submit"
        :disabled="loading"
      >
        {{ loading ? "Loading..." : "Login" }}
      </button>
      <div
        v-if="error"
        class="alert alert-dark d-flex justify-content-center text-align-center"
      >
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
//import VueLoadingButton from "vue-loading-button";
export default {
  name: "LogIn",

  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");

    const store = useStore();
    const router = useRouter();
    const loading = ref(false);

    const Login = async () => {
      loading.value = true;
      error.value = "";
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });

        router.push("/products");
      } catch (e) {
        error.value = "Invalid email or password";
      } finally {
        loading.value = false;
      }
    };
    return { Login, email, password, error, loading };
  },
};
</script>
