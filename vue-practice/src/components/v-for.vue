<template>
  <div class="v-for" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <p>結果是 1-10</p>
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>

    <p>結果是 0-10</p>
    <ul>
      <li v-for="n in 10 + 1" :key="n">{{ n - 1 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-for",
  props: ["message"],
  components: {},
  data() {
    return {
      text: "v-for component",
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    },
  },
  created() {
    this.text += ", click me!";
  },
};
</script>

<style scoped>
.v-for {
  font-weight: bold;
  color: #41b883;
}
</style>
