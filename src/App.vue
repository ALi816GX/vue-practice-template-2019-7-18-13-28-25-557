<template>

  <div id="app">

    <Children @changeNum="getValue" :passFromFather="caculateNum"></Children>
    <p>obj.a: {{obj.a}}</p>
    <p>obj.a: <input type="text" v-model="obj.a"></p>
    <input type="button" @click="this.testClick">
    <!--<input v-model="array">-->
    <p>array[0]: {{array[0]}}</p>
    <p>array[0]: <input type="text" v-model="array[0]"></p>
    <input type="button" @click="this.testClick2">
    <p>{{value}}</p>
    <p>{{caculateNum}}</p>

  </div>

</template>

<script>

    import Children from './components/Children.vue'

    export default {

        name: 'app',

        data(){
          return{
            value:0,
            obj:{
              a: 123
            },
            array:[1,2]
          }
        },
        methods:{

          getValue(val){
            this.value = val
          },
          testClick(){
            this.obj.a = 3
          },
          testClick2(){
            console.log('-----');
            this.array[0] = 100;
            // this.array.push(1);
            console.log('-----1----');
          }

        },
        computed:{

          caculateNum() {
            return this.value + 'computed'
          }

        },
      watch:{
        obj: {
          handler(newName, oldName) {
            console.log('obj.a changed');
          },
          deep: true
        },
        array:{
          handler(val) {
            console.log('val',val)
          },
          deep: true
        }
      },

        components: {
          Children
        },

    }

</script>

