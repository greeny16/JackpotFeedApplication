<template>
  <div id="app">
    <JPFeed />
  </div>
</template>

<script>
import JPFeed from "./components/JPFeed.vue";
export default {
  name: "App",
  components: {
    JPFeed,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
