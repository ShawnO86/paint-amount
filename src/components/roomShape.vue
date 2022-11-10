<template>
    <div class="mainContainer">
      <h2>First, select a room shape:</h2>
      <form @submit.prevent>
        <div id="shapeContainer">
          <div>
          <label for="rectangle">Rectangle</label>
          <input
            type="radio"
            id="rectangle"
            value="rectangle"
            name="roomShape"
            v-model="roomShape"
          /></div>
          <div>
          <label for="square">Square</label>
          <input
            type="radio"
            id="square"
            value="square"
            name="roomShape"
            v-model="roomShape"
          /></div>
          <div>
          <label for="custom">Custom</label>
          <input
            type="radio"
            id="custom"
            value="custom"
            name="roomShape"
            v-model="roomShape"
          /></div>
        </div>
      </form>
  
      <MeasurementForm :roomShape="roomShape" />
    </div>
  </template>
  
  <script>
  import MeasurementForm from "@/components/measureForm.vue";
  
  export default {
    name: "Add-Room",
    components: {
      MeasurementForm,
    },
    data() {
      return {
        roomShape: "",
      };
    },
  
  };
  </script>
  <style scoped>
#shapeContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#shapeContainer div {
  border: 1px solid black;
  padding: 0.5rem;
}
#shapeContainer label, #shapeContainer input{
  cursor: pointer;
}
.mainContainer {
  margin: 2rem 1rem;
}
</style>
  