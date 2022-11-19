<template>
  <div>
    <form @submit="submitRoom">
      <h2>Next, enter measurements:</h2>
      <div class="formHolder">
        <div class="inputContainer">
          <label for="squareLength">Length</label>
          <input
            type="number"
            placeholder="length"
            v-model="length"
            id="squareLength"
          />
        </div>
        <div class="inputContainer">
          <label for="squareHeight">Wall Height</label>
          <input
            type="number"
            placeholder="height"
            v-model="height"
            id="squareHeight"
          />
        </div>
      </div>
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
  </div>
</template>
  
  <script>
export default {
  name: "square-form",
  data() {
    return {
      length: "",
      height: "",
      windows: "",
      doors: "",
    };
  },
  computed: {
    area() {
      return (
        ((this.length * 4) * this.height) -
        (this.windowArea + this.doorArea)
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
    submitRoom(e) {
      e.preventDefault();

      if (!this.length || !this.height) {
        alert("Input measurements first.");
      } else {
        const newRoom = {
          id: Math.floor(Math.random() * 10000),
          area: this.area,
          one_coat: this.oneCoat,
          two_coats: this.twoCoats,
          windows: this.windows,
          doors: this.doors,
          shape: "Square",
        };
        this.$emit("addRoom", newRoom);

        this.length = "";
        this.height = "";
        this.windows = "";
        this.doors = "";
      }
    },
  },
};
</script>

  <style scoped>
form {
  width: 100%;
}
</style>