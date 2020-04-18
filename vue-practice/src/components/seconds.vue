<template>
  <div class="seconds" :title="message" @click="myalert">
    <div>{{ seconds }} seconds have elapsed since you opened the page.</div>
    <button :disabled="this.buttonDisabled = !this.buttonDisabled"> test button</button>
  </div>
</template>

<script>

export default {
  name: "seconds",
  props: ["message"],
  components: {
  },
  data() {
    return {
      buttonDisabled : true,
      text: "seconds component",
      seconds: 0
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    }
  },
  created() {
    setInterval(() => {
      this.seconds++;
    }, 1000)
  }
};
</script>

<style scoped>
.seconds {
  font-weight: bold;
  color: #41b883;
}
</style>
