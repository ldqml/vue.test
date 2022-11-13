<template>
   <ul>
    <li>消息编号:{{$store.query.id}}</li>
    <li>消息内容:{{$store.query.title}}</li>
   </ul>
</template>

<script>
export default {
    name:'QueryMessage'
}
</script>

<style>

</style>