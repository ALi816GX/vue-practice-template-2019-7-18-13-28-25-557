<template>
    <div id="counter-group">
        <Counter v-for="(counterOne, index) in counts" :key="index"></Counter>
    </div>
</template>

<script>
    import Counter from './Counter'
    export default {
        data () {
            return {
                counts: [],
                total: 0
            }
        },

        components:{
            Counter
        },
        props: ["counterNum"],

        watch: {
            counterNum () {
                this.counts = [];
                for (let i = 0; i < this.counterNum; i++) {
                    this.counts.push({number: 0});
                }
            }
        },
        mounted () {
            for (let i = 0; i < this.counterNum; i++) {
                this.counts.push({number: 0});
            }
        }
    }
</script>