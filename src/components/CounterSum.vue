<template>
    <div id="counterSum">
        <span>Total:</span>
        <span>{{$store.getters.getTotalNum}}</span>
    </div>
</template>

<script>
    export default {
        name: "counterSum"
    }

</script>

<style>
    #counterSum {
        margin-top: 20px;
    }
</style>

