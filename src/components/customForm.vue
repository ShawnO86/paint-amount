<template>
  <h2>Enter your measurements:</h2>
  <form @submit.prevent="submitRoom">
    <div class="formHolder">
      <div class="walls">
        <div class="inputContainer" v-for="(wall, index) in walls" :key="index">
          <label>Wall {{ index + 1 }}</label>
          <input v-model="wall.width" placeholder="Width" class="wallInput" />
          <button @click.prevent="removeWall(index)" class="removeWallBtn">
            &#10006;
          </button>
        </div>
        <button @click.prevent="addWall()" class="addWallBtn">New wall</button>
      </div>
      <div class="windowDoor">
        <div class="inputContainer height">
          <label for="customHeight">Wall Height</label>
          <input
            type="number"
            placeholder="height"
            v-model="height"
            id="customHeight"
          />
        </div>

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
        <input type="submit" value="Save Room" class="submitBtn" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "custom-form",
  emits: ["addRoom"],
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
      roomName: "",
    };
  },
  computed: {
    area() {
      let total = this.walls.reduce(
        (acc, val) => acc + val.width * this.height,
        0
      );
      return total - (this.windowArea + this.doorArea);
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

      if ((!this.height, !this.area)) {
        alert("Input measurements first.");
      } else if (!this.roomName) {
        alert("Input Room name!");
      } else {
        const newRoom = {
          id: Math.floor(Math.random() * 10000),
          area: this.area,
          one_coat: this.oneCoat,
          two_coats: this.twoCoats,
          windows: this.windows,
          doors: this.doors,
          shape: "Custom",
          roomName: this.roomName,
        };
        this.$emit("addRoom", newRoom);

        (this.walls = [
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
        ]),
          (this.height = ""),
          (this.windows = "");
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
.removeWallBtn {
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
}
.removeWallBtn:hover {
  transform: scale(120%);
}
.addWallBtn {
  width: 89%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: var(--main-color);
  color: rgb(245, 245, 245);
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  border: none;
  cursor: pointer;
  font-weight: 700;
}
.addWallBtn:hover {
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
  background-color: var(--secondary-color);
}
.submitBtn {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: var(--main-color);
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

.formHolder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 0.5rem;
  background-color: var(--main-color);
  padding: 0.75rem;
}
@media only screen and (max-width: 441px) {
  .formHolder {
    justify-content: center;
  }
  .walls {
    position: relative;
    left: 0.75rem;
  }
}
</style>