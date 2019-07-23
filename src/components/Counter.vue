<template>
    <div id="counter">
        <div>{{num}}</div>
        <button @click="add()">add+</button>
        <button @click="minus()">minus-</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',

        data () {
            return {
                num:this.number
            }
        },

        methods: {
            add () {
                this.num++;
                // this.$emit("add",1);
                this.$store.commit('addTotal')
            },
            minus () {
                this.num--;
                // this.$emit("minus",-1);
                this.$store.commit('minusTotal');
            }
        },

        props:{
            number:Number
        }

    }
</script>

<style>
    #counter {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        margin-top: 20px;
    }
</style>
