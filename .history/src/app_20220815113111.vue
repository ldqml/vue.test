<template>
  <sum-add></sum-add>
</template>

<script>
import SumAdd from './components/SumAdd'
export default {
    name:'App',
    components:{SumAdd},
    mounted:{
        console.log('App',this)
    }
}
</script>

<style>

</style>