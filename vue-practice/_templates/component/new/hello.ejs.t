---
to: src/components/<%=name%>.vue
---
<template>
  <div class="<%=name%>" :title="message" @click="myalert">
    <div>{{ text }}</div>
    <div>
      <icon name="check-circle" scale="2" />
    </div>
  </div>
</template>

<script>
// to use vue-awesome should run npm install vue-awesome command.
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

export default {
  name: "<%=name%>",
  props: ["message"],
  components: {
    icon: Icon
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
