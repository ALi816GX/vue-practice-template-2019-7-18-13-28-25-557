<template>
  <div id="app">
    <div>
      <span>请输入数字：</span>
      <input type="text" v-model="counterNumber">
    </div>
    <Counter/>
  </div>
</template>

<script>
    import Counter from './components/Counter.vue'

    export default {
        name: 'app',
        data() {
            return {
                counterNumber: 0
            }
        },


        components: {
            Counter
        }

    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>