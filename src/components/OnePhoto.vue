<template>
<div class="photo">
    <img :src="src" @click="openModal">
    <div>
      <star-active v-if="getFavorites" :photo="photo"></star-active>
      <star-empty v-else :photo="photo"></star-empty>
    </div>
  </div>
  <modal-window :modalIsOpen="modalIsOpen" v-model:show="modalIsOpen">
    <div class="modal-window">
      <img :src="src">
    </div>
  </modal-window>
</template>

<script>
import ModalWindow from "@/components/UI/ModalWindow";
import StarActive from "@/components/UI/StarActive";
import StarEmpty from "@/components/UI/StarEmpty";
export default {
  name: "OnePhoto",
  components: {StarEmpty, StarActive, ModalWindow},
  props: {
    photo: {
      type: Object
    }
  },
  data() {
    return {
      src: this.photo.url,
      modalIsOpen: false,
    }
  },
  methods: {
    openModal() {
      this.modalIsOpen = true
    }
  },
  computed: {
    getFavorites: function () {
      return this.$store.getters.getFavorites.filter(item => item.id === this.photo.id).length === 1
    }
  }
}

</script>

<style scoped>

img {
  position: absolute;
  height: 150px;
  width: 150px;
}
.photo {
  cursor: pointer;
  position: relative;
  margin: 10px;
  height: 150px;
  width: 150px;
}

.modal-window img {
  width: 600px;
  height: 600px;
}

</style>