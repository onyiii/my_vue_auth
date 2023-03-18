<template>
  <div class="signup">
    <form @submit.prevent="signup" class="bg-dark text-warning">
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
          type="text"
          id="name"
          v-model="name"
          required
          placeholder="Enter your Username"
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
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Confirm your Password"
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
        class="btn bg-dark text-warning border border-2 border-warning submit"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>
