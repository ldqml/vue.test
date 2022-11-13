<template>
<div>
<school-name ref="sh"/>
<button ref="all" @click="ti">点我一下</button>
</div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
export default {
    name:'App',
    components:{
        SchoolName
    },
    methods:{
        ti(){
            console.log(this.$refs.sh)
        }
    }
}
</script>

<style>

</style>