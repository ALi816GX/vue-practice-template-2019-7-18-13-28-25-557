<template>
    <div>
        <Counter v-for="item in items" :key="item.key" :number="item.number" @add="addTotal" @minus="minusTotal"></Counter>
        <CounterSum :total="total"></CounterSum>
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
                total: 0
            }
        },

        components:{
            Counter,
            CounterSum
        },

        props:["counterNumber"],

        watch: {
            counterNumber: function () {
                this.items = [];
                for (let i = 0; i < this.counterNumber; i++) {
                    this.items.push({key: i,number: 0});
                }
                this.total = 0;

                this.$store.commit("clearTotal");

            },
        },
        methods:{
            addTotal(value){
                this.total += value;


            },
            minusTotal(value){
                this.total += value;
            }
        }
    }
</script>

