<template>
    <div class="counter">
        <div>{{number}}</div>
        <button v-on:click="add">add+</button>
        <button v-on:click="minus">minus-</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',

        data () {
            return {
            }
        },

        methods: {
            add () {
                this.number++;
                this.$root.$emit('change', {"index": this.index, "number": this.number});
            },
            minus () {
                this.number--;
                this.$root.$emit('change', {"index": this.index, "number": this.number});
            }
        },

        props: {
            number: Number,
            index: Number
        }
    }


</script>
