<template>
  <div id="app">
    <Actor></Actor>
  </div>
</template>

<script>
import Actor from '../src/views/editPost/Actor.vue'
export default {
  name: 'App',
  components: {
    Actor
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
