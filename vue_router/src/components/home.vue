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
  name: 'Home',
  data: function() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('create')
  },
  mounted() {
  },
  update() {
  },
  destroyed() {
    console.log('destroy')
  },
  // available when using keep-alive. same as deactivated
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>
