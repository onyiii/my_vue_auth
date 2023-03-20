<template>
  <div class="login">
    <form class="bg-dark text-warning">
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
      <p v-if="errMsg">{{ errMsg }}</p>
      <button
        class="btn bg-dark text-warning border border-2 border-warning mb-2"
        @click="signin"
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
  signInWithEmailAndPassword,
  googleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  name: "LogIn",
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const errMsg = ref("");

    const signin = () => {
      const auth = getAuth;
      signInWithEmailAndPassword(auth(), email.value, password.value)
        .then((data) => {
          console.log(data);
          alert("Successfully logged in");
          console.log(auth.currentUser);
          router.push("/products");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Invalid email";
              break;
            case "auth/user-not-found":
              errMsg.value = "No account with that email was found";
              break;
            case "auth/wrong-password":
              errMsg.value = "Incorrect password";
              break;
            default:
              errMsg.value = "Email or password was incorrect";
              break;
          }
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
      signin,
      email,
      password,
      errMsg,
    };
  },
};
</script>
