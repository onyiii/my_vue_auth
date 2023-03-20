<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style>
body,
html {
  margin: 0;
  max-width: 100%;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  max-height: 100%;
}

form {
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 1rem;
  padding: 50px;
  border: 4px solid hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}
input {
  margin: 10px;
  padding: 20px 200px;
  display: flex;
}

a:hover {
  border-bottom: 2px solid #ffbf00;
}
</style>
