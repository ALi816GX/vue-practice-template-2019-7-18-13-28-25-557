<template>
    <div id="counterGroup">

        <Counter v-for="(countOne, index) in counts" :key="index" :number="countOne.number" :index="index"></Counter>
        <CounterSum :total="total"/>

    </div>
</template>

<script>
    import Counter from './Counter'
    import CounterSum from './CounterSum';

    export default {
        data () {
            return {
                counts: [],
                total: 0
            }
        },

        components:{
            Counter,
            CounterSum
        },

        props: ["counterNumber"],

        watch: {

            counterNumber () {
                this.counts = [];
                this.total = 0;
                for (let i = 0; i < this.counterNumber; i++) {
                    this.counts.push({number: 0});
                }
            }

        },

        mounted () {

            for (let i = 0; i < this.counterNumber; i++) {
                this.counts.push({number: 0});
            }

            let chosedOne = this;
            chosedOne.$root.$on('change', function(val) {
                chosedOne.counts[val.index].number = val.number;
                chosedOne.total = 0;
                for (let i = 0; i < chosedOne.counts.length; i++) {
                    chosedOne.total += chosedOne.counts[i].number;
                }
            });

        }
    }
</script>

