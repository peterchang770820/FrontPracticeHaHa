---
to: src/components/<%=name%>.vue
---
<template>
  <div class="<%=name%>" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <div>
    </div>
  </div>
</template>

<script>

export default {
  name: "<%=name%>",
  props: ["message"],
  components: {
  },
  data() {
    return {
      text: "<%=name%> component"
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
.<%=name%> {
  font-weight: bold;
  color: #41b883;
}
</style>
