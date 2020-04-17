<template>
  <div class="js-item-sample" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <div>
      <ul class="js-items">
        <li v-if="!items.length">Sorry, there are no items.</li>
        <li
          v-for="item in items"
          :key="item"
          :class="{ 'is-blue': item.includes('blue') }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "js-item-sample",
  props: ["message"],
  components: {},
  data() {
    return {
      text: "js-item-sample component",
      items: [],
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    },
  },
  created() {
    this.text += ", click me!";
    fetch("https://localhost:44334/api/JsItems")
      .then((res) => res.json())
      .then((data) => {
        this.items = data.items;
      });
  },
};
</script>

<style scoped>
.is-blue {
  color: blue;
}
</style>
