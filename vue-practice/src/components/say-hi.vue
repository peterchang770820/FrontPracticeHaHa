<template>
  <div class="say-hi" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <div>
      <p v-if="hours < 12">Good Morning!</p>
      <p v-if="hours >= 12 && hours < 18">Good Afternoon!</p>
      <p v-if="hours >= 18">Good Evening!</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "say-hi",
  props: ["message"],
  components: {
  },
  data() {
    return {
      hours: new Date().getHours()
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
.say-hi {
  font-weight: bold;
  color: #41b883;
}
</style>
