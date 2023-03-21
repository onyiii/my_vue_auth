<template>
  <div class="login">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
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
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "LogIn",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const Login = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        alert("logged in");
        router.push("/products");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { Login, email, password, error };
  },
};
</script>
