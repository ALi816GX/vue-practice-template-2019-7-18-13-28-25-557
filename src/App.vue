<template>

  <div id="app">

    <div>
      <span>Input num：</span>
      <input type="text" v-model="counterNumber">
    </div>

    <CounterGroup :counterNumber = "counterNumber"/>

  </div>

</template>

<script>
    import CounterGroup from './components/CounterGroup.vue'
    export default {

        name: 'app',
        data() {
            return {
                counterNumber: 5
            }
        },
        components: {
            CounterGroup,
        }
    }
</script>



<style>
  #app {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;

  }
</style>