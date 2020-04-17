<template>
  <div class="url-path">
    <p v-if="path === '/'">
      You are on the home page
    </p>
    <p v-else>You're on {{ path }}</p>
  </div>
</template>

<script>
export default {
  name: "url-path",
  data() {
    return {
      path: this.$route.path
    };
  },
};
</script>

<style scoped></style>
