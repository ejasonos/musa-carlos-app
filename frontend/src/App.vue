<script setup lang="ts">
</script>

<template>
  <nav class="flex justify-center space-x-5">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/feed">Feed</RouterLink>
  </nav><RouterView />
</template>

<style scoped>
.router-link-active {
  color: brown;
}
</style>
