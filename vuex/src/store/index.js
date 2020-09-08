import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 1, name: 'Messi', age: 33 },
      { id: 10, name: 'Jordan', age: 50 },
      { id: 11, name: 'Kobe', age: 40 },
      { id: 100, name: 'Duncan', age: 40 },
      { id: 101, name: 'James', age: 33 }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    showStudent(state) {
      return state.students.filter(s => s.age >= 40)
    },
    showStudentLen(state, getters) {
      return getters.showStudent.length
    },
    student(state) {
      return (age) => (state.students.filter(s => s.age >= age))
    }
  },
  modules: {

  }
})

export default store
