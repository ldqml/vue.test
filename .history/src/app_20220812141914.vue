<template>
  <div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <my-header @receive="receive"></my-header>
            <my-list :todos="todos"></my-list>
            <my-footer :todos='todos' @checkall='checkall' @clearallltodo='clearallltodo'></my-footer>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    
}
</script>

<style>

</style>