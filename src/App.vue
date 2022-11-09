<template>
  <div>
    <fieldset>
      <legend><h1>How much paint will you need?</h1></legend>
      <RoomShape />
    </fieldset>
  </div>
</template>

<script>
import RoomShape from "@/components/roomShape.vue";

export default {
  name: "App",
  components: {
    RoomShape,
  },
};
</script>
