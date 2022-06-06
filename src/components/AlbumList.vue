<template>
  <div :key="album.id" v-for="album in albums">
    <one-album :album="album"></one-album>
  </div>
</template>

<script>

import OneAlbum from "@/components/OneAlbum";
export default {
  name: "AlbumList",
  components: {OneAlbum},
  props: {
    albums: {
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>