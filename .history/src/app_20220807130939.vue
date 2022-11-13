<template>
<div>
<ref="sh" school-name/>
<button ref="all">点我一下</button>
</div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
export default {
    name:'App',
    components:{
        SchoolName
    }
}
</script>

<style>

</style>