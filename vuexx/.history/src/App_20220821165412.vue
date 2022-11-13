<template>
<div>
    <sum-add></sum-add>
    <per-song></per-song>
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