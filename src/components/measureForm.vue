<template>
  <div>
    <custom-form @addRoom="addRoom" />
    <h3>Saved Rooms:</h3>
    <div class="roomList">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="roomCard"
        @click="updateRoom"
      >
        <button class="delBtn" @click="deleteRoom(room.id)">&#10006;</button>
        <p class="roomId">Room Name: {{ room.roomName }}<br /></p>
        <div class="roomData">
          <p v-if="room.windows">Windows: {{ room.windows }}</p>
          <p v-if="room.doors">Doors: {{ room.doors }}</p>
          <p>Paintable Area: {{ room.area }}sq. feet</p>
          <p>One coat: {{ room.one_coat }} gallon(s).</p>
          <p>Two coats: {{ room.two_coats }} gallon(s).</p>
        </div>
      </div>
    </div>
    <h3 v-if="totalOneCoat && totalTwoCoats" class="center">
      One coat total: {{ totalOneCoat }} gallons || Two coat total: {{ totalTwoCoats }} gallons
    </h3>
  </div>
</template>
  
  <script>
import customForm from "@/components/customForm.vue";

export default {
  name: "measurement-form",
  props: {
    roomShape: String,
  },
  components: {
    "custom-form": customForm,
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
  computed: {
    totalOneCoat() {
      let total;
      if (this.rooms.length > 0) {
        let newRoomArr = [this.rooms];
       total = newRoomArr[0].reduce(
        (acc, val) => acc + val.one_coat,
        0
      );
      }
      return total;
    },
    totalTwoCoats() {
      let total;
      if (this.rooms.length > 0) {
        let newRoomArr = [this.rooms];
       total = newRoomArr[0].reduce(
        (acc, val) => acc + val.two_coats,
        0
      );
      }
      return total;
    },
  },
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
  min-width: 70%;
  border-top: 5px solid var(--main-color);
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem 0 0.5rem;
  background-color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
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
.center {
  text-align: center;
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