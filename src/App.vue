<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <p>woheni{{count}}</p>
    <button v-on:click="add">点我+</button>
    <button v-on:click="decrease">点我-</button>


    <!--<div id="example-1">-->
      <!--<button v-on:click="counter += 1">Add 1</button>-->
      <!--<p>The button above has been clicked {{ counter }} times.</p>-->
    <!--</div>-->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name:`app`,
    data: function () {
        return{
            count:0
        };
    },

    // 在 `methods` 对象中定义方法
    methods: {
        add: function () {
          this.count++;
        },
        decrease: function () {
            this.count--;
        }
    }
  // name: 'app',
  // components: {
  //   HelloWorld
  // }
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
