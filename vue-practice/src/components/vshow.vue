<template>
  <div class="vshow" :title="message" @click="myalert">

    <p>使用 v-if 不會產生 HTML</p>
    <div v-if="true">one</div>
    <div v-if="false">two</div>
    <br>
    <p>使用 v-show 會產生 HTML (display)</p>
    <div v-show="true">one</div>
    <div v-show="false">two</div>
    <br>

    <!-- <p>會發生錯誤 因為 v-show 會產生 HTML ，這時候 user 為 undefined ，但是卻這樣寫 user.name </p>
    <div v-show="user">
      <p>User name: {{ user.name }}</p>
    </div> -->

    <div v-if="state === 'loading'">Loading...</div>
    <div v-else-if="state === 'error'">An error occurred</div>
    <div v-else>... our content!</div>

  </div>
</template>

<script>

export default {
  name: "vshow",
  props: ["message"],
  components: {
  },
  data() {
    return {
      text: "vshow component",
      user: undefined,
      state: ''
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
.vshow {
  font-weight: bold;
  color: #41b883;
}
</style>
