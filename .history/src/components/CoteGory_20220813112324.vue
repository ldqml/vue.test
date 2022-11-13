<template>
  <div class="big">
    <h3>{{title}}</h3>
    <ul>
        <li>xxx</li>
        <li>xx</li>
        <li>xx</li>
        <li>xxx</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'CoteGory',
    props:['title','isdata']
}
</script>

<style>
.big{
    width: 200px;
    height: 250px;
    background-color: aqua;
}
h3{
    text-align: center;
}
</style>