<template>
  <div>
    <h2>HomeName组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
      <li>
        <router-link replace active-class="active" to="/home/message">MessAge</router-link>
      </li>
      <li>
        <router-link replace active-class="active" to="/home/newsofm">NewSofm</router-link>
      </li>
    </ul>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeName",
}
</script>

<style>

</style>