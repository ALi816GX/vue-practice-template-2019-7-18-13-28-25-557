<template>

  <div id="app">

    <Children @changeNum="getValue" :passFromFather="caculateNum"></Children>
    <p>obj.a: {{obj.a}}</p>
    <p>obj.a: <input type="text" v-model="obj.a"></p>
    <input type="button" @click="this.testClick">
    <p>array[0]: {{array[0]}}</p>
    <p>array[0]: <input type="text" v-model="array[0]"></p>
    <input type="button" @click="this.testClick2">
    <p>arrayObject[0]: {{arrayObject[0].a}}</p>
    <p>arrayObject[0]: <input type="text" v-model="arrayObject[0].a"></p>
    <input type="button" @click="this.testClick3">
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
            array:[1,2],
            arrayObject:[{
              a:123
            },{
              a:234
            }]
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
          },testClick3(){
            console.log('-----');
            this.arrayObject[0].a = 100;
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
            console.log('newName',newName);
            console.log('oldName',oldName);
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

