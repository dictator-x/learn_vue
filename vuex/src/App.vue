<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from '@/components/HelloVuex.vue'
  export default {
    name: 'App',
    data() {
      return {
        message: 'message',
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
      }
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>
</style>
