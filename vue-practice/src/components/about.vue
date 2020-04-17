<template>
  <div class="about" :title="message" @click="myalert">
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
  name: "about",
  props: ["message"],
  components: {
    UrlPath
  },
  data() {
    return {
      text: "about component"
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
.about {
  font-weight: bold;
  color: #41b883;
}
</style>
