<template>
   <ul>
    <li>消息编号:{{$router.query.id}}</li>
    <li>消息内容:{{$router.query.title}}</li>
   </ul>
</template>

<script>
export default {
    name:'QueryMessage'
}
</script>

<style>

</style>