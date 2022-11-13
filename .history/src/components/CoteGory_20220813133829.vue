<template>
  <div class="big">
    <h3>{{title}}</h3>
    <slot name="center"></slot>
    <slot name="bottom"></slot>
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