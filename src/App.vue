<template>
  <div id="appContainer">
    <h1>How much paint will you need?</h1>
    <RoomShape />
  </div>
</template>

<script>
import RoomShape from "@/components/roomShape.vue";

export default {
  name: "App",
  components: {
    RoomShape,
  },
};
</script>

<style>
:root {
  --main-bg-color: rgb(29, 94, 94);
  --secondary-color: rgb(171, 75, 19);
}
#app {
  max-width: 65rem;
  margin: 1rem auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#appContainer {
  border: 3px solid var(--main-bg-color);
  padding: 0 1rem;
  background-color: #e9e9e9;
  border-radius: 1rem;
  color: #111;
}
h1 {
  color: #111;
  text-align: center;
}
h2,
h3 {
  color: #111;
  border-bottom: 3px solid var(--secondary-color);
  padding: 1rem;
}
@media only screen and (max-width: 470px) {
  #app {
    margin: 0;
  }
  #appContainer {
    padding: 0.5rem;
    border: 2px solid var(--main-bg-color);
  }
  h2,
  h3 {
    border-bottom: 2px solid var(--secondary-color);
    padding: 0.5rem;
  }
}
</style>