<template>
  <div class="container">
    <div class="buttons-container">
      <div v-for="(button, index) in buttonArray" :key="button.name">
        <button
          class="ui button toggle"
          @click="currentIndex = index"
          :class="{active: index===currentIndex}">
          {{button.name}}
        </button>
      </div>
    </div>
    <div>
      <users-list v-if="currentIndex === 0" class="users-wrapper"></users-list>
      <favorites-photos v-else-if="currentIndex === 1" class="favorites-wrapper">
      </favorites-photos>
    </div>
  </div>

</template>

<script>
import UsersList from "@/components/UsersList";
import FavoritesPhotos from "@/components/FavoritesPhotos";

export default {
  name: 'App',
  components: {
    FavoritesPhotos,
    UsersList
  },
  data() {
    return {
      buttonArray: [{name: "Каталог", IsActive: true}, {name: "Избранное", IsActive: false}],
      currentIndex: 0
    }
  },
  mounted() {
    if (localStorage.getItem('Favorites') === null){
      localStorage.setItem('Favorites', JSON.stringify([]));
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  font-family: Roboto sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.favorites-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.users-wrapper {
  min-width: 700px;
}
button {
  cursor: pointer;
  width: 382px;
  height: 60px;
  border: none;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
.active {
  color: #117DC1;
  background: #EDF9FF;
}
.buttons-container {
  display: flex;
  margin: 20px 0 20px 0;
}

</style>
