<template>
  <div>
    <form @submit="submitRoom">
      <h2>Next, enter measurements:</h2>
      <div class="formHolder">
        <div>
        <div class="inputContainer">
          <label for="squareWidth">Width</label>
          <input
            type="number"
            placeholder="width"
            v-model="width"
            id="squareWidth"
          />
        </div>
        <div class="inputContainer">
          <label for="squareHeight">Height</label>
          <input
            type="number"
            placeholder="height"
            v-model="height"
            id="squareHeight"
          />
        </div>
        </div>

        <div class="windowDoor">
        <div class="inputContainer">
          <label for="windows">Windows (-15sq. ft.)</label>
          <input
            type="number"
            placeholder="Windows"
            id="windows"
            v-model="windows"
          />
        </div>
        <div class="inputContainer">
          <label for="doors">Doors (-20sq. ft.)</label>
          <input type="number" placeholder="Doors" id="doors" v-model="doors" />
        </div>      
        <div class="inputContainer">
          <label for="roomName">Room Name</label>
          <input
            type="text"
            placeholder="Room Name"
            id="roomName"
            v-model="roomName"
          />
        </div>
        </div>
  
        <input type="submit" value="Save Room" class="submitBtn" />
      </div>

    </form>
  </div>
</template>
  
  <script>
export default {
  name: "square-form",
  data() {
    return {
      width: "",
      height: "",
      windows: "",
      doors: "",
      roomName: ""
    };
  },
  computed: {
    area() {
      return this.width * 4 * this.height - (this.windowArea + this.doorArea);
    },
    oneCoat() {
      return Math.round((this.area / 350) * 100) / 100;
    },
    twoCoats() {
      return Math.round((this.area / 200) * 100) / 100;
    },
    windowArea() {
      return this.windows * 15;
    },
    doorArea() {
      return this.doors * 20;
    },
  },
  methods: {
    submitRoom(e) {
      e.preventDefault();

      if (!this.width || !this.height) {
        alert("Input measurements first.");
      } else if(!this.roomName) {
        alert("Input Room name!")
      } else {
        const newRoom = {
          id: Math.floor(Math.random() * 10000),
          area: this.area,
          one_coat: this.oneCoat,
          two_coats: this.twoCoats,
          windows: this.windows,
          doors: this.doors,
          shape: "Square",
          roomName: this.roomName
        };
        this.$emit("addRoom", newRoom);

        this.width = "";
        this.height = "";
        this.windows = "";
        this.doors = "";
        this.roomName = "";
      }
    },
  },
};
</script>

  <style scoped>
label {
  display: block;
  font-weight: 500;
  color: white;
}
input {
  padding: 0.25rem;
  margin-bottom: 0.25rem;
}
h2 {
  font-size: 1.25rem;
  color: white;
  background: var(--main-color);
  padding: 0.5rem;
}
.formHolder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 0.5rem;
  background-color: var(--main-color);
  padding: 0.75rem;
}
.submitBtn {
    width: 80%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: var(  --main-color);
  color: rgb(245, 245, 245);
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  border: none;
  cursor: pointer;
  font-weight: 700;
}
.submitBtn:hover {
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
  background-color: var(--secondary-color);
}
</style>