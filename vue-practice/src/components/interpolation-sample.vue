<template>
  <div class="interpolation-sample" :title="message" @click="myalert">
    <p>Hello, {{ greetee }}</p>
  </div>
</template>

<script>

export default {
  name: "interpolation-sample",
  props: ["message"],
  components: {
  },
  data() {
    return {
      greetee: 'world',
      text: "interpolation-sample component"
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
.interpolation-sample {
  font-weight: bold;
  color: #41b883;
}
</style>
