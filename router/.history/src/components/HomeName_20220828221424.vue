<template>
  <div>
    <h2>HomeName组件内容</h2>
    <div class="nav nav-table">
      <li>
        <router-link active-class="active" to="/home/message">MessAge</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/home/newsofm">NewSofm</router-link>
      </li>
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