<template>
  <div class="two-way" :title="message">
    <input type="text" :value="inputText">
    <p>one way inputText: {{ inputText }}</p>

    <input type="text" v-model="inputText2" value="test...">
    <p>two way inputText: {{ inputText2 }}</p>


    <br>

<label>
  <input type="radio" v-model="radioValue" value="one"> One
</label>
<label>
  <input type="radio" v-model="radioValue" value="two"> Two
</label>
<label>
  <input type="radio" v-model="radioValue" value="three"> Three
</label>
    <p>two way radio value: {{ radioValue }}</p>

  </div>
</template>

<script>

export default {
  name: "two-way",
  props: ["message"],
  components: {
  },
  data() {
    return {
      inputText : 'initial value',
      inputText2 : 'initial value',
      radioValue : 'one'
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
.two-way {
  font-weight: bold;
  color: #41b883;
}
</style>
