<template>
  <div @click.once="fetchPhotos" @click="show = !show" class="spoiler">
    <open-spoiler :isOpen="show"></open-spoiler>
    <div>{{album.title}}</div>
  </div>
    <transition name="fade">
    <div v-if="show" class="photos-container">
      <photos-list :photos="photos"></photos-list>
    </div>
  </transition>
  <div v-show="photosIsLoaded === false"><img class="loader" src="../assets/loader.gif"></div>
  <fetch-error v-show="hasError === true"></fetch-error>
</template>

<script>
import axios from "axios";
import PhotosList from "@/components/PhotosList";
import OpenSpoiler from "@/components/UI/OpenSpoiler";

export default {
  name: "OneAlbum",
  components: {OpenSpoiler, PhotosList},
  props: {
    album: {
     type: Object,
    }
  },
  data(){
    return {
      photos: [],
      photosIsLoaded: true,
      hasError: false,
      show: false
    }
  },
  methods: {
    async fetchPhotos() {
      try {
        const response = await axios.get('https://json.medrating.org/photos?albumId=' + this.album.id);
        this.photos = response.data;
        this.photosIsLoaded = false;
      } catch (e) {
        this.hasError = true;
      } finally {
        this.photosIsLoaded = true;
      }
    }
  }
}
</script>

<style scoped>
.spoiler{
  display: flex;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 50px;
}
.photos-container {
  display:flex;
  flex-wrap: wrap;
  max-width: 700px;
}
</style>