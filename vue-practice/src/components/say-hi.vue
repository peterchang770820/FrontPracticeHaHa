<template>
  <div class="say-hi" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <div>
      <p v-if="isMorning">Good Morning!</p>
      <p v-if="isAfternoon">Good Afternoon!</p>
      <p v-if="isEvening">Good Evening!</p>
    </div>
  </div>
</template>

<script>
var hours = new Date().getHours();
export default {
  name: "say-hi",
  props: ["message"],
  components: {
  },
  data() {
    return {
      isMorning: hours < 12,
      isAfternoon: hours >= 12 && hours < 18,
      isEvening: hours >= 18
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
