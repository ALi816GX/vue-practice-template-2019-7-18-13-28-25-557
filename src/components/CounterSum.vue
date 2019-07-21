<template>
    <div id="counterSum">
        <div>
            <span>Total:</span>
            <span>{{total}}</span>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            "total": Number
        }

    }
</script>

