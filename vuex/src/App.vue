<template>
  <div id="app">
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.showStudent }}</h2>
    <h2>{{ $store.getters.showStudentLen }}</h2>
    <h2>{{ $store.getters.student(50) }}</h2>
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
    computed: {
      showStudent() {
        return this.$store.state.students.filter(s => s.age >= 40)
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
