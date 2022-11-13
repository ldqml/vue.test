<template>
<div>
    <sum-add></sum-add>
    <hr>
    <per-son></per-son>
</div>
</template>

<script>
import PerSon from './components/PerSon'
import SumAdd from './components/SumAdd'
export default {
    name:'App',
    components:{SumAdd,PerSon}
}
</script>

<style>

</style>