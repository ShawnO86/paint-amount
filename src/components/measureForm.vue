<template>
  <div>
    <div v-if="roomShape == 'rectangle'">
      <RectangleForm @addRoom="addRoom" />
    </div>
    <div v-if="roomShape == 'square'">
      <SquareForm @addRoom="addRoom" />
    </div>
    <div v-if="roomShape == 'custom'">
      <CustomForm @addRoom="addRoom" />
    </div>
    <h3>Saved Rooms:</h3>
    <div class="roomList">
      <div v-for="room in rooms" :key="room.id" class="roomCard">
        <button class="delBtn" @click="deleteRoom(room.id)">&#10006;</button>
        <p class="roomId">
          Room id #: {{ room.id }}<br />
          ({{ room.shape }})
        </p>
        <div class="roomData">
          <p v-if="room.windows">Windows: {{ room.windows }}</p>
          <p v-if="room.doors">Doors: {{ room.doors }}</p>
          <p>Paintable Area: {{ room.area }}sq. feet</p>
          <p>One coat (walls): {{ room.one_coat }} gallon(s).</p>
          <p>Two coats (walls): {{ room.two_coats }} gallon(s).</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import RectangleForm from "@/components/rectangleForm.vue";
import SquareForm from "@/components/squareForm.vue";
import CustomForm from "@/components/customForm.vue";

export default {
  name: "measurement-form",
  props: {
    roomShape: String,
  },
  components: {
    RectangleForm,
    SquareForm,
    CustomForm
  },
  data() {
    return {
      rooms: [],
    };
  },
  mounted() {
    if (localStorage.rooms) {
      this.rooms = JSON.parse(localStorage.rooms);
    }
  },
  watch: {
    rooms: {
      handler(newRooms) {
        localStorage.rooms = JSON.stringify(newRooms);
      },
      deep: true,
    },
  },
  emits: ["addRoom"],
  methods: {
    addRoom(roomObj) {
      if (localStorage.rooms) {
        let existingRooms = JSON.parse(localStorage.rooms);
        this.rooms = [...existingRooms, roomObj];
      } else {
        this.rooms = [...this.rooms, roomObj];
      }
    },
    deleteRoom(id) {
      if (confirm("Delete this room?")) {
        this.rooms = this.rooms.filter((room) => room.id !== id);
      }
    },
  },
};
</script>

  <style>
.formHolder {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.formHolder label {
  display: block;
  font-weight: 700;
}
.formHolder input {
  padding: 0.5rem;
  text-align: center;
}
.submitBtn {
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
.submitBtn:active,
.submitBtn:hover {
  background-color: rgba(29, 94, 94, 0.25);
  color: #000;
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.25);
}
.roomList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-columns: 15rem;
  gap: 2rem;
  margin: 3rem 2rem;
}
.roomCard {
  color: #333;
  font-weight: 500;
  border-radius: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem 1rem 0 1rem;
  box-shadow: 2px 2px 5px rgba(51, 51, 51, 0.5);
  max-width: 20rem;
  justify-self: center;
}
.roomId {
  position: relative;
  bottom: 2rem;
  font-weight: 700;
  border-bottom: 1px solid rgb(171, 75, 19);
  padding-bottom: 1rem;
}
.roomData {
  position: relative;
  bottom: 1.5rem;
}
.delBtn {
  position: relative;
  color: red;
  border: none;
  border-radius: 1rem;
  left: 90%;
  cursor: pointer;
  font-weight: 900;
  transition: transform 150ms;
  z-index: 2;
}
.delBtn:hover {
  transform: scale(135%);
}
@media only screen and (max-width: 450px) {
  .roomList {
    margin: 1rem 0.25rem;
  }
}
</style>