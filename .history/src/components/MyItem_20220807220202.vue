<template>
  <div>
    <li>
        <label>
            <input type="checkbox">
            <span>yyyyy</span>
        </label>
        <button class="btn btn-danger" style="display: none">删除</button>
        </li>
  </div>
</template>

<script>
export default {
    name:'MyItem'
}
</script>

<style>
 li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
 }
 li label{
    float: left;
    cursor: pointer;
 }
 li label li input{
    vertical-align: middle;
    margin-left: 6px;
    position: relative;
    
 }
</style>