<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Main</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>User</router-link>
    <!-- <button @click="homeClick">Main</button> -->
    <!-- <button @click="aboutClick">About</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      homeClick() {
        this.$router.replace('/home')
      },
      aboutClick() {
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: #f00;
  }
</style>
