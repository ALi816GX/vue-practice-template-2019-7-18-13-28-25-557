<template>

    <div>

        <input v-model="test"/>

        <p>{{passFromFather}}FromFather</p>

    </div>


</template>

<script>
    export default {
        name:"children",
        props:['passFromFather'],

        data(){
            return{
                test:0
            }
        },

        watch:{
            test() {
                console.log(this.test)
                this.$emit('changeNum',this.test)
            }
        }

    }

</script>