<template>
  <div
    class="d-flex flex-column fs-2 justify-content-center align-items-center error-pg"
  >
    <b>Page not Found</b>
    <a class="btn btn-dark fw-bold fs-4" href="/"> Back To Home</a>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
.error-pg {
  margin-top: 20%;
  text-align: center;
}
</style>
