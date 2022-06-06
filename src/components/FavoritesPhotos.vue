<template>
  <div class="favorite-wrapper">
    <div v-for="favorite in favorites" :key="favorite.id">
      <one-photo :photo="favorite"></one-photo>
    </div>
  </div>
</template>

<script>
import OnePhoto from "@/components/OnePhoto";
export default {
  name: "FavoritesPhotos",
  components: {OnePhoto},
  data() {
    return {
      favorites: this.$store.state.favorites,
    }
  }
}
</script>

<style scoped>

.favorite-wrapper {
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
}

</style>