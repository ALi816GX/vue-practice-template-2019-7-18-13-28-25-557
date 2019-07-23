<template>
    <div id="counterSum">
        <span>Total:</span>
        <span>{{total}}</span>
    </div>
</template>

<script>
    export default {
        name: "counterSum",
        props: {
            "total": Number
        }

    }
</script>

<style>
    #counterSum {
        margin-top: 20px;
    }
</style>

