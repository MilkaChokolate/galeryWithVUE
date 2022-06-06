<template>
  <div v-if="isOpen">-</div>
  <div v-else>+</div>
</template>

<script>
export default {
  name: "OpenSpoiler",
  props: {
    isOpen: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
div {
  background-color: #117DC1;
  color: #fff;
  content: "\002B";
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  font-size: 32px;
  font-weight: bold;
  height: 32px;
  line-height: 16px;
  margin: 3px 5px;
  text-align: center;
  width: 32px;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
</style>