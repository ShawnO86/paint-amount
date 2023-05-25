<template>
  <section>
    <h1>How much paint will you need?</h1>
    <measurement-form />
  </section>
</template>

<script>
import measurementForm from "@/components/measureForm.vue";

export default {
  name: "App",
  components: {
    "measurement-form": measurementForm,
  },
};
</script>

<style>
:root {
  --main-color: rgba(33, 33, 53, 0.75);
  --secondary-color: rgb(171, 75, 19);
}
body {
  background-image: url(./assets/brickwall.webp);
}
#app {
  background-color: rgba(33, 33, 53, 0.3);
  border: 1px dashed var(--secondary-color);
  max-width: 40rem;
  margin: 1rem auto;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#app h1 {
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  color: white;
}
@media only screen and (max-width: 900px) {
  #app {
    padding: 0.5rem;
  }
}
@media only screen and (min-width: 2000px) {
  #app {
    max-width: 60rem;
    margin: 2rem auto;
    padding: 2rem;
  }
}
</style>