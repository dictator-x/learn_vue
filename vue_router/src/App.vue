<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Main</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <!-- <router-link :to="'/user/'+userId" tag="button" replace>User</router-link> -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'Kobe', age: 40}}" tag="button" replace>Profile</router-link> -->

    <!-- <button @click="homeClick">Main</button> -->
    <!-- <button @click="aboutClick">About</button> -->
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>

    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'Messi'
      }
    },
    methods: {
      homeClick() {
        this.$router.replace('/home')
      },
      aboutClick() {
        this.$router.replace('/about')
      },
      userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'Kobe',
            age: 19,
            height: 1.87
          }
        })
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: #f00;
  }
</style>
