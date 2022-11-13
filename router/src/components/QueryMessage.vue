<template>
   <ul>
    <li>消息编号:{{id}}</li>
    <li>消息内容:{{title}}</li>
   </ul>
</template>

<script>
export default {
    name:'QueryMessage',
    props:['id','title']
}
</script>

<style>

</style>