<template>
  <div class="v-bind" :title="message" >
    <div>{{ text }}</div>
    <p>button type</p>
    <button v-bind:type="buttonType">Test button</button>

    <p>button disabled</p>
    <button v-bind:disabled="buttonDisabled">Test button </button>

    <p>v-bind 可以簡化成 :</p>
    <button :type="buttonType">Test button</button>
    <button :disabled="buttonDisabled">Test button </button>

  </div>
</template>

<script>

export default {
  name: "v-bind",
  props: ["message"],
  components: {
  },
  data() {
    return {
      buttonType: "submit",
      buttonDisabled: true,
      text: "v-bind component"
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
.v-bind {
  font-weight: bold;
  color: #41b883;
}
</style>
