<template>
  <div id="root">
    <div class="container">
        <my-search></my-search>
        <my-list></my-list>
    </div>
  </div>
</template>

<script>
import MySearch from "./components/MySearch"
import MyList from "./components/MyList"
import MyList from './components/MyList.vue'
export default {
    name:'App',
    components:{MySearch,MyListMyList},
    data(){

    }
}
</script>

<style>

</style>