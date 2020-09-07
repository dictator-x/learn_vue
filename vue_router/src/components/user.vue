<template>
  <div>
    <h2>This is User</h2>
    <p>User info: </p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
    <button @click="btnClick">button</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick() {
        console.log(this.$router);
        console.log(this.$route)
      }
    }
  }
</script>

<style scoped>
</style>
