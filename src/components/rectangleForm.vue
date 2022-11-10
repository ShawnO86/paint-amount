<template>
    <form @submit="submitRoom">
      <h2>Next, enter measurements:</h2>
      <div class="formHolder">
        <div class="inputContainer">
          <label for="rectLength">Length</label>
          <input
            type="number"
            placeholder="length"
            v-model="length"
            id="rectLength"
          />
        </div>
        <div class="inputContainer">
          <label for="rectWidth">Width</label>
          <input
            type="number"
            placeholder="width"
            v-model="width"
            id="rectWidth"
          />
        </div>
        <div class="inputContainer">
          <label for="rectHeight">Height</label>
          <input
            type="number"
            placeholder="height"
            v-model="height"
            id="rectHeight"
          />
        </div>
        </div>
        <h2>Then, subtract windows and doors from area (optional):</h2>
        <div class="formHolder">     
          <div class="inputContainer"> 
            <label for="windows">Windows (15sq. ft.)</label>
            <input
              type="number"
              placeholder="Windows"
              id="windows"
              v-model="windows"
            />
  
          </div>      
          <div class="inputContainer">
            <label for="doors">Doors (20sq. ft.)</label>
            <input type="number" placeholder="Doors" id="doors" v-model="doors" />
  
          </div>
      </div>
      <input type="submit" value="Save Room" class="submitBtn" />
      <div class="outputContainer">
        <p v-if="area">Total paintable area (walls): {{ area }} square feet.</p>
        <p v-if="oneCoat">
          Total paint needed (one coat): {{ oneCoat }} gallons.
        </p>
        <p v-if="twoCoats">
          Total paint needed (two coats): {{ twoCoats }} gallons.
        </p>
        <p v-if="oneCoat">Ceiling area: {{ ceilingArea }} square feet.</p>
        <p v-if="oneCoat">
          Ceiling paint (one coat): {{ oneCoatCeiling }} gallons.
        </p>
        <p v-if="oneCoat">
          Ceiling paint (two coats): {{ twoCoatCeiling }} gallons.
        </p>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: "rectangle-form",
    props: {},
    data() {
      return {
        length: "",
        width: "",
        height: "",
        windows: 0,
        doors: 0,
      };
    },
    computed: {
      area() {
        return ((this.length * 2 + this.width * 2) * this.height) - (this.windowArea + this.doorArea);
      },
      oneCoat() {
        return Math.round((this.area / 350) * 100) / 100;
      },
      twoCoats() {
        return Math.round((this.area / 200) * 100) / 100;
      },
      ceilingArea() {
        return this.width * this.length;
      },
      oneCoatCeiling() {
        return Math.round((this.ceilingArea / 350) * 100) / 100;
      },
      twoCoatCeiling() {
        return Math.round((this.ceilingArea / 200) * 100) / 100;
      },
      windowArea() {
        return this.windows * 15;
      },
      doorArea() {
        return this.doors * 20;
      }
    },
    methods: {
      submitRoom(e) {
        e.preventDefault();
  
        if (!this.length || !this.width || !this.height) {
          alert("Input measurements first.");
        } else {
          const newRoom = {
            id: Math.floor(Math.random() * 10000),
            area: this.area,
            one_coat: this.oneCoat,
            two_coats: this.twoCoats,
            ceiling_area: this.ceilingArea,
            one_ceiling: this.oneCoatCeiling,
            two_ceiling: this.twoCoatCeiling,
            shape: "Rectangle",
          };
          this.$emit("addRoom", newRoom);
  
          this.length = "";
          this.width = "";
          this.height = "";
          this.windows = "";
          this.doors = "";
        }
      },
    },
  };
  </script>