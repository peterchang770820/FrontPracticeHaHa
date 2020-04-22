<template>
  <div class="method-status-from-id" >
    <input type="text" v-model="status">
    <p>Current status: {{ statusFromId(status)  }}</p>
  </div>
</template>

<script>

export default {
  name: "method-status-from-id",
  props: ["message"],
  components: {
  },
  data() {
    return {
      status: 2
    };
  },
  methods: {
    myalert() {
      alert(this.message);
    },
    statusFromId(id){
      const status = ({
        0: 'Asleep',
        1: 'Eating',
        2: 'Learning Vue'
      })[id];

      return status || 'Unknown status:' + id;
    }
  },
  created() {
    this.text += ", click me!";
  }
};
</script>

<style scoped>
.method-status-from-id {
  font-weight: bold;
  color: #41b883;
}
</style>
