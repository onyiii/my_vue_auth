<template>
  <div class="signup">
    <form class="bg-dark text-warning">
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
        @click="register"
      >
        Submit
      </button>
      <button
        class="btn bg-dark text-warning border border-2 border-warning"
        @click="signInWithGoogle"
      >
        Sign In With Google
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  googleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const router = useRouter();
    const register = () => {
      const auth = getAuth;
      createUserWithEmailAndPassword(auth(), email.value, password.value)
        .then((data) => {
          console.log(data);
          alert("Successfully registered");
          router.push("/login");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    const signInWithGoogle = () => {
      const provider = new googleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          router.push("/products");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    return {
      signInWithGoogle,
      register,
      name,
      email,
      password,
    };
  },
};
</script>
