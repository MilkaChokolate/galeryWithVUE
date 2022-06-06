<template>
  <div class="star">
    <img src="../../assets/star_active.png" @click="remove">
  </div>
</template>

<script>

export default {
  name: "StarActive",
  props: {
    photo: {
      type: Object
    }
  },
  methods: {
    remove(){
      this.$store.commit("removeFromFavorites", this.photo.id);
    }
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