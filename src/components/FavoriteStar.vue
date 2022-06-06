<template>
<div class="star">
  <img src="../assets/star_active.png" v-if="itFavorites">
  <img src="../assets/star_empty.png" v-else @click="$store.commit('removeFromFavorites')">
</div>
</template>

<script>
export default {
  name: "FavoriteStar",
  props: {
    itFavorites:{
      type: Boolean
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.star {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 32px;
    width: 32px;
}
</style>