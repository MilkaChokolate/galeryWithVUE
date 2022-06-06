<template>
<div v-for="photo in photos" :key="photo.id" class="container">
  <one-photo :photo="photo"></one-photo>
</div>
</template>

<script>
import OnePhoto from "@/components/OnePhoto";
export default {
  name: "PhotosList",
  components: {OnePhoto},
  props: {
    photos: {
      type: Array
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  left: 100px;
}
</style>