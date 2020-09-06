<template>
  <div>
    <h2>This is User</h2>
    <p>User info: </p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>
</style>
