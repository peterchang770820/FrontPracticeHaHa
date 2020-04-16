<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import interceptorsSetup from "./interceptors/interceptor";

interceptorsSetup();
Vue.use(VueAxios, axios);

export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    // Vue.axios.get("http://localhost:55530/api/values/get").then(response => {
      // console.log(response.data);
    // });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
