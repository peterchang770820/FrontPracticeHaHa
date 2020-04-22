<template>
  <div class="method-filter-positive">
    <ul>
      <li v-for="number in filterPositive(numbers)" :key="number">
        {{ number }}
      </li>
    </ul>

    <p>
      {{ this.getPositiveNumbersSum() }}
    </p>
  </div>
</template>

<script>

export default {
  name: "method-filter-positive",
  props: ["message"],
  components: {
  },
  data() {
    return {
      numbers: [-5, 0, 2 -1, 1, 0.5]
    };
  },
  methods: {
    filterPositive(numbers){
      return numbers.filter((n) => n > 0);
    },
    getPositiveNumbers(){
      return this.numbers.filter(n => n > 0);
    },
    getPositiveNumbersSum(){
      return this.getPositiveNumbers().reduce((sum, val) => sum + val);
    }
  },
  created() {
    this.text += ", click me!";
  }
};
</script>

<style scoped>
.method-filter-positive {
  font-weight: bold;
  color: #41b883;
}
</style>
