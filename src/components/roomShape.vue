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
#shapeContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  row-gap: 1rem;
}
.roomShapeContainer {
  width: 25%;
}
.roomShapeContainer input[type="radio"] {
  appearance: none;
}
.roomShapeContainer input {
  display: block;
  cursor: pointer;
  font-weight: 700;
  background-color: rgb(29, 94, 94);
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  width: 100%;
  text-align: center;
}
.roomShapeContainer input:checked {
  background-color: rgba(29, 94, 94, 0.25);
  color: #000;
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
}
.roomShapeContainer input::before {
  content: attr(label);
  text-align: center;
}
.mainContainer {
  margin: 2rem 0.5rem;
}
@media only screen and (max-width: 550px) {
  #shapeContainer {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .roomShapeContainer {
  width: 100%;
}
}
</style>
  