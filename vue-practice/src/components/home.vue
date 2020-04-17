<template>
  <div class="home" :title="message" @click="myalert">
    <UrlPath />
    <div>{{ text }}</div>
    <div>
      <!-- <icon name="check-circle" scale="2" /> -->
    </div>
  </div>
</template>

<script>

import UrlPath from "./url-path";
export default {
  name: "home",
  props: ["message"],
  components: {
    UrlPath
  },
  data() {
    return {
      text: "home component"
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    }
  },
  created() {
    this.text += ", click me!";
  }
};
</script>

<style scoped>
.home {
  font-weight: bold;
  color: #41b883;
}
</style>
