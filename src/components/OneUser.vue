<template>
<div>
  <div @click="show = !show" class="spoiler" @click.once="fetchAlbums">
    <open-spoiler :isOpen="show"></open-spoiler>
    <div>{{user.name}}</div>
  </div>
  <transition name="fade">
    <div v-if="show">
      <album-list :albums="albums"></album-list>
    </div>
  </transition>
  <div v-show="userIsLoaded === false"><img class="loader" src="../assets/loader.gif"></div>
  <fetch-error v-show="hasError === true"></fetch-error>
</div>
</template>

<script>
import AlbumList from "@/components/AlbumList";
import axios from "axios";
import OpenSpoiler from "@/components/UI/OpenSpoiler";

export default {
  name: "OneUser",
  components: {OpenSpoiler, AlbumList},
  data(){
    return {
      show: false,
      hasError: false,
      albums: [],
      userIsLoaded: true
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    async fetchAlbums(){
      try {
        const response = await axios.get('https://json.medrating.org/albums?userId=' + this.user.id);
        console.log('fetch')
        this.albums = response.data;
        this.userIsLoaded = false;
      } catch (e) {
        this.hasError = true;
      } finally {
        this.userIsLoaded = true;
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.spoiler{
  display: flex;
  font-size: 1.2em;
  cursor: pointer;
}
</style>