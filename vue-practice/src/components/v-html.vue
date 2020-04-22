<template>
  <div class="v-html" :title="message" >
    <input type="text" v-model="myHtml">
    <div v-html="myHtml">
    </div>
  </div>
</template>

<script>

export default {
  name: "v-html",
  props: ["message"],
  components: {
  },
  data() {
    return {
      myHtml: "<p>123456789</p>"
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
.v-html {
  font-weight: bold;
  color: #41b883;
}
</style>
