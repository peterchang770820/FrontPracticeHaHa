<template>
  <div class="dogs" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <p>The fist dog is {{ dogs[0] }}</p>
    <p>The second dog is {{ dogs[1] }}</p>
    <p>The third dog is {{ dogs[2] }}</p>
    <p>The fourth dog is {{ dogs[3] }}</p>
    <p>All the dogs are {{ dogs }}</p>
  </div>
</template>

<script>

export default {
  name: "dogs",
  props: ["message"],
  components: {
  },
  data() {
    return {
      text: "dogs component",
      dogs: ['Rex', 'Rover', 'Henrietta', 'Alan']
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
.dogs {
  font-weight: bold;
  color: #41b883;
}
</style>
