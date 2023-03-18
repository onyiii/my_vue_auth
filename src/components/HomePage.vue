<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div
        class="col-md-6 bg-dark text-warning d-flex intro"
        style="--bs-text-opacity: 0.5"
      >
        Stay Connected, Stay Alive
      </div>
      <div class="col-md-6 gadgets"></div>
      <a
        class="btn btn-dark text-light fw-bold shop"
        style="--bs-text-opacity: 0.5"
        href="/login"
        role="button"
        >Shop Now</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.intro {
  font-family: "Lobster", cursive;
  font-size: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 9rem;
}
.gadgets {
  background-image: url("../assets/bgImage.jpeg");
}
.shop {
  font-size: 40px;
}
@keyframes example {
  from {
    background-color: #1b1818;
  }
  to {
    background-color: #ffae00e2;
  }
}
.shop {
  background-color: #1b1818;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  border: none;
}
</style>
