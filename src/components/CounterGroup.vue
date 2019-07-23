<template>
    <div>
        <Counter v-for="item in items" :key="item.key" :number="item.number"></Counter>
        <CounterSum :total="total"></CounterSum>
        <!--<span>{{getCounterNumber}}</span>-->
    </div>
</template>

<script>
    import Counter from './Counter';
    import CounterSum from './CounterSum';

    export default {
        name:"counterGroup",
        data () {
            return {
                items: [],
                total: 0,
                counterNumber: 0
            }
        },

        components:{
            Counter,
            CounterSum
        },

        computed: {
          getCounterNumber() {
              return this.$store.getters.getCounterNum;
          }
        },

        watch: {
            getCounterNumber(counterNum){
                this.items = [];
                for (let i = 0; i < counterNum; i++) {
                    this.items.push({key: i,number: 0});
                }
                this.total = 0;

                this.$store.commit("clearTotal");
            }
        }
    }
</script>

