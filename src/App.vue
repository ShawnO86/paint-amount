<template>
  <div id="appContainer">
    <h1>How much paint will you need?</h1>
    <RoomShape />
  </div>
  <div id="paintBG"></div>
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
  --main-color: rgba(33, 33, 53, 0.75);
  --secondary-color: rgb(171, 75, 19);
}
body::before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  z-index: -1;
  background-image: url(./assets/blueRoller.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}
#appContainer {
  background-color: rgba(33, 33, 53, 0.3);
  border: 1px dashed var(--secondary-color);
  max-width: 40rem;
  margin: 1rem auto;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#appContainer h1 {
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  color: white;
}
@media only screen and (max-width: 900px) {
  #appContainer {
    padding: 0.5rem;
  }
}
@media only screen and (min-width: 2000px) {
  #appContainer {
  max-width: 60rem;
  margin: 2rem auto;
  padding: 2rem;
}
body::before {
  background-position: left;
  width: 40%;
}
}

</style>