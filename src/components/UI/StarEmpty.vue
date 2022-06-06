<template>
  <div class="star">
    <img src="../../assets/star_empty.png" @click="add">
  </div>
</template>

<script>
export default {
  name: "StarEmpty",
  props: {
    photo: {
      type: Object,
    },
  },
  methods: {
    add(){
      this.$store.commit("addToFavorites", this.photo);
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