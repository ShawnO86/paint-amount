<template>
  <div class="mainContainer">
    <h2>First, select a room shape:</h2>
    <form @submit.prevent>
      <div id="shapeContainer">
        <div class="roomShapeContainer">
          <input
            label="Rectangle"
            type="radio"
            id="rectangle"
            value="rectangle"
            name="roomShape"
            v-model="roomShape"
          />
        </div>
        <div class="roomShapeContainer">
          <input
            label="Square"
            type="radio"
            id="square"
            value="square"
            name="roomShape"
            v-model="roomShape"
          />
        </div>
        <div class="roomShapeContainer">
          <input
            label="Custom"
            type="radio"
            id="custom"
            value="custom"
            name="roomShape"
            v-model="roomShape"
          />
        </div>
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
h2 {
  font-size: 1.25rem;
  color: white;
  background: var(--main-color);
  padding: 0.5rem;
}
#shapeContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0.5rem;
  column-gap: 0.5rem;
}
.roomShapeContainer {
  flex: 1;
  position: relative;
  right: 0.3rem;
}
.roomShapeContainer input[type="radio"] {
  appearance: none;
}
.roomShapeContainer input {
  display: block;
  cursor: pointer;
  font-weight: 700;
  background-color: var(--main-color);
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;
}
.roomShapeContainer input:checked {
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
  background-color: var(--secondary-color);
}
.roomShapeContainer input::before {
  content: attr(label);
  text-align: center;
}

@media only screen and (max-width: 300px) {
  #shapeContainer {
    flex-direction: column;
  }
}
</style>
  