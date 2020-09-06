<template>
  <div>
    <h2>This is Main</h2>
    <p>Main</p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
