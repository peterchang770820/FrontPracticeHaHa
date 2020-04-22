<template>
  <div class="reactivity-sample" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <p>{{ formData.username }}</p>
    <p>{{ formData.name }}</p>

    <p>{{ formData2.username }}</p>
    <p>{{ formData2.name }}</p>
  </div>
</template>

<script>

export default {
  name: "reactivity-sample",
  props: ["message"],
  components: {
  },
  data() {
    return {
      text: "reactivity-sample component",
      formData : {
        username: 'someuser',
        name: undefined
      },
      formData2 : {
      },
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    }
  },
  created() {
    this.text += ", click me!";

    // 設置 data 的屬性
    this.$set(this.formData, 'name', 'Some User');

    // 幫 data 增加 property (主要是他會產生一個新物件，然後覆寫舊物件)
    this.formData2 = Object.assign({}, this.formData2,{
      username: 'someuser',
      name: ''
    });

    this.$set(this.formData2, 'name', 'Some User');
  }
};

// import Vue from 'vue'
// const vm = new Vue({
//   data: {
//     formData2:{
//       // 有響應式
//       username: 'somesuer'
//     }
//   }
// })

// // 沒有響應式
// vm.formData2.name = 'Some user'; 

</script>

<style scoped>
.reactivity-sample {
  font-weight: bold;
  color: #41b883;
}
</style>
