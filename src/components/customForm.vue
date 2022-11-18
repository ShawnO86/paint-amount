<template>
  <form @submit="submitRoom">
    <h2>Next, enter measurements:</h2>

    <div class="formHolder">
      <div
        class="inputContainer customForm"
        v-for="(wall, index) in walls"
        :key="index"
      >
        <label>Wall {{ index + 1 }}</label>
        <input v-model="wall.width" type="number" placeholder="Width" class="wallInput"/>
        <button @click.prevent="removeWall(index)" class="removeWallBtn">&#10006;</button>
      </div>

      <div class="inputContainer height">
        <label for="customHeight">Wall Height</label>
        <input
          type="number"
          placeholder="height"
          v-model="height"
          id="customHeight"
        />
      </div>
    </div>

    <button @click.prevent="addWall()" class="addWallBtn">Add wall</button>
    <h2>Then, subtract windows and doors from area (optional):</h2>
    <div class="formHolder">
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
    </div>

    <input type="submit" value="Save Room" class="submitBtn" />
  </form>
</template>

<script>
export default {
  name: "custom-form",
  props: {},
  data() {
    return {
      height: "",
      walls: [
        {
          width: "",
        },
        {
          width: "",
        },
        {
          width: "",
        },
        {
          width: "",
        },
      ],
      windows: "",
      doors: "",
    };
  },
  computed: {
    area() {
        let total = this.walls.reduce((acc, val) => acc + val.width * this.height, 0)
      return (
        total - (this.windowArea + this.doorArea)
      );
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
    addWall() {
      this.walls.push({
        width: "",
      });
    },
    removeWall(index) {
      this.walls.splice(index, 1);
    },
    submitRoom(e) {
      e.preventDefault();

      if (!this.height) {
        alert("Input height first.");
      } else {
        const newRoom = {
          id: Math.floor(Math.random() * 10000),
          area: this.area,
          one_coat: this.oneCoat,
          two_coats: this.twoCoats,
          windows: this.windows,
          doors: this.doors,
          shape: "Custom",
        };
        this.$emit("addRoom", newRoom);

        (this.walls = [{
          width: "",
        },
        {
          width: "",
        },
        {
          width: "",
        },
        {
          width: "",
        },]), 
        (this.height = ""), 
        (this.windows = "");
        this.doors = "";
      }
    },
  },
};
</script>

<style>
.btnHolder {
  display: flex;
  gap: 2rem;
  margin: 1rem;
}
.wallInput{
  position: relative;
  left: 1rem;
}
.wallInput:first-child{
  position: relative;
  right: 1rem;
}
.addWallBtn {
  padding: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin: 1.5rem auto 0 auto;
  width: 100%;
  background-color: rgb(29, 94, 94);
  color: #fff;
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  border: none;
  border-radius: 0.5rem;
}
.addWallBtn:active,
.addWallBtn:hover {
  background-color: rgba(29, 94, 94, 0.25);
  color: #000;
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
}
.removeWallBtn {
  color: red;
  background-color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 900;
  transition: transform 150ms;
  margin-left: 0.5rem;
  position: relative;
  right: 10%;
}
.removeWallBtn:hover {
  transform: scale(135%);
}
@media only screen and (max-width: 550px) {
  .removeWallBtn {
    right: 5%;
  }
}
</style>