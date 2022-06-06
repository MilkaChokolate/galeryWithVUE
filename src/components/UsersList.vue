<template>
  <div v-for="user in users" :users="users" :key="user.id" class="users-wrapper">
    <one-user :user="user"></one-user>
  </div>
  <div v-show="usersIsLoaded === false"><img class="loader" src="../assets/loader.gif"></div>
  <fetch-error v-show="hasError === true"></fetch-error>
</template>

<script>
import axios from "axios";
import FetchError from "@/components/UI/FetchError"
import OneUser from "@/components/OneUser";

export default {
  name: "UsersList",
  components: {
    OneUser,
    FetchError
  },
  data() {
    return{
      users: [],
      usersIsLoaded: true,
      hasError: false
    }
  },
  methods: {
    async fetchUsers(){
      try {
        const response = await axios.get('https://json.medrating.org/users/');
        this.users = response.data;
        this.usersIsLoaded = false;
      } catch (e) {
        this.hasError = true;
      } finally {
        this.usersIsLoaded = true;
      }
    }
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>



<style scoped>
.loader {
  width: 300px;
  height: 300px;
}
</style>