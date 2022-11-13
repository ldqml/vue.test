<template>
  <div class="demo">
    <h1 ref="h1">学校信息</h1>
    <h3 ref="h3">学校名称:{{name}}</h3>
    <h3>学校地址:{{address}}</h3>
    <button ref="btn" @click="ti">点我显示内容</button>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
        return {
            name:'九江职业技术学院',
            address: '九江濂溪区'
        }
    },
    methods:{
      ti(){
        console.log(this.$refs.h3)
        console.log(this.$refs.btn)
      }
    }
}
</script>

<style>
.demo {
    background-color: aqua;
}
</style>