<template>
  <div class="city-avg-rent" :title="message" @click="myalert">
    <div>{{ text }}</div>
<ul>
  <li v-for="(rent, city) in averageRent" :key="rent">
    The average rent in {{city}} is ${{rent}} 
  </li>
</ul>
  </div>
</template>

<script>

export default {
  name: "city-avg-rent",
  props: ["message"],
  components: {
  },
  data() {
    return {
      text: "city-avg-rent component",
      averageRent : {
        London: 1650,
        Paris: 1730,
        NYC: 3680,
        Taiwan: 1000
      }
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
.city-avg-rent {
  font-weight: bold;
  color: #41b883;
}
</style>
