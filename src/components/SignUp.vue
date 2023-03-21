<template>
  <div class="signup">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <form action="#" @submit.prevent="Register" class="bg-dark text-warning">
      <div class="display-6">Sign Up</div>
      <div>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          placeholder="Enter your Full Name"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your Email"
        />
      </div>

      <div>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your Password"
        />
      </div>

      <div>
        Already have an account?
        <span>
          <router-link
            to="/login"
            class="text-decoration-none text-warning fw-bold"
            >Log In</router-link
          >
        </span>
      </div>
      <button
        class="btn bg-dark text-warning border border-2 border-warning mb-2"
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",

  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const Register = async () => {
      try {
        await store.dispatch("register", {
          email: email.value,
          password: password.value,
          name: name.value,
        });
        alert("Successfully registered");
        router.push("/login");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { Register, name, email, password, error };
  },
};
</script>
