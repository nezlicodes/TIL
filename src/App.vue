<template>
  <div id="app">
  <top-header-top-vue></top-header-top-vue>
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/secret"> Secret</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topHeaderTopVue from './components/top-header-top.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
    topHeaderTopVue
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
