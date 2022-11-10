<template>
    <div>
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
  