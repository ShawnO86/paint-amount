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
      <div v-for="room in rooms" :key="room.id" class="roomCard" @click="updateRoom">
        <button class="delBtn" @click="deleteRoom(room.id)">&#10006;</button>
        <p class="roomId">
          Room Name: {{ room.roomName }}<br />
          ({{ room.shape }})
        </p>
        <div class="roomData">
          <p v-if="room.windows">Windows: {{ room.windows }}</p>
          <p v-if="room.doors">Doors: {{ room.doors }}</p>
          <p>Paintable Area <br />{{ room.area }}sq. feet</p>
          <p>One coat (walls) <br />{{ room.one_coat }} gallon(s).</p>
          <p>Two coats (walls) <br />{{ room.two_coats }} gallon(s).</p>
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
    CustomForm,
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

  <style scoped>
h3 {
  font-size: 1rem;
  color: white;
  background: var(--main-color);
  padding: 0.5rem;
}
.roomList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  gap: 0.5rem;
  margin: 0.5rem;
}
.roomCard {
  width: 90%;
  border-top: 5px solid var(--main-color);
  border-radius: 0.75rem 0 0 0.75rem ;
  padding: 0.25rem 0.5rem 0 0.5rem;
  box-shadow: 2px 2px 3px rgba(51, 51, 51, 0.65);
  background-color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}
.roomCard:nth-child(2n){
  border-radius: 0 0.75rem 0.75rem 0 ;
  box-shadow: -2px 2px 3px rgba(51, 51, 51, 0.65);
}
.roomCard:hover {
  transform: scale(105%);
  background-color: rgba(255, 255, 255, 1);
}
.roomId {
  font-weight: 700;
}
.roomId,
.roomData {
  position: relative;
  bottom: 5%;
}
.roomCard:nth-child(2n) .roomData {
  text-align: right;
}
.roomCard:nth-child(2n) .roomId {
  text-align: right;
}
.delBtn {
  position: relative;
  left: 90%;
  bottom: 1%;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  font-weight: 600;
}
.roomCard:nth-child(2n) .delBtn {
  left: 0%;
}
.delBtn:hover {
  transform: scale(120%);
}
@media only screen and (max-width: 330px) {
  .roomList {
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.25rem;
  margin: 0.15rem;
}
}
@media only screen and (max-width: 537px) { 

  .roomCard:nth-child(2n) .delBtn {
  left: 90%;
}
.roomCard:nth-child(2n) .roomData {
  text-align: left;
}
.roomCard:nth-child(2n) .roomId {
  text-align: left;
}
.roomCard{ 
  border-radius: 0.75rem;
}
.roomCard:nth-child(2n){
  border-radius: 0.75rem;
  box-shadow: 2px 2px 3px rgba(51, 51, 51, 0.65);
}
}
@media only screen and (min-width: 2000px) {
  .roomList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  gap: 1rem;
  margin: 1rem;
}
.delBtn {
  left: 92%;
  top: 2%;
}
.roomCard:nth-child(2n) .delBtn {
  left: 2%;
}
.roomId,
.roomData {
padding: 0 1.5rem;
}
}

</style>