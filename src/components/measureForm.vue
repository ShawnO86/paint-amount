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

    <div class="roomList" v-if="rooms[0]">
      <div v-for="room in rooms" :key="room.id">
          <button class="delBtn" @click=deleteRoom(room.id)>
          &#10006;
        </button>
        <p>
          Room number: {{ rooms.indexOf(room) + 1 }}<br />
          ({{ room.shape }})
        </p>
        <p>Area: {{ room.area }}sq. feet</p>
        <p>One coat (walls): {{ room.one_coat }} gallon(s).</p>
        <p>Two coats (walls): {{ room.two_coats }} gallon(s).</p>
        <p>Ceiling area: {{ room.ceiling_area }}</p>
        <p>One coat (ceiling): {{ room.one_ceiling }}</p>
        <p>Two coats (ceiling): {{ room.two_ceiling }}</p>
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
    emits: ["addRoom"],
    methods: {
      addRoom(roomObj) {
        this.rooms = [...this.rooms, roomObj];
      },
      deleteRoom(id) {
        if (confirm("Delete this room?")) {
          this.rooms = this.rooms.filter((room) => room.id !== id);
        }
    },
  }
  }
  </script>