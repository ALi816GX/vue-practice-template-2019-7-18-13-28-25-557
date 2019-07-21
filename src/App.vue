<template>
  <div id="app">
    <div>
      <span>请输入数字：</span>
      <input type="text" v-model="counterNum">
    </div>

    <CounterGroup :counterNum = "counterNum"/>

  </div>
</template>

<script>
    import CounterGroup from './components/CounterGroup.vue'

    export default {
        name: 'app',
        data() {
            return {
                counterNum: 0
            }
        },


        components: {
            CounterGroup
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
    margin-top: 20px;
  }
</style>