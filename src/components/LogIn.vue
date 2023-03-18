<template>
  <div class="login">
    <form @submit.prevent="login" class="bg-dark text-warning">
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
        class="btn bg-dark text-warning border border-2 border-warning mb-5 submit"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>
