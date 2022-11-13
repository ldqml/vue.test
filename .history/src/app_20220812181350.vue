<template>
  <div id="root">
    <div class="container">
        <my-search></my-search>
    </div>
  </div>
</template>

<script>
import MySearch from "./components/MySearch"
import MyList from "./components/MyList"
export default {
    name:'App',
    components:{MySearch,MyList},
    data(){

    }
}
</script>

<style>

</style>