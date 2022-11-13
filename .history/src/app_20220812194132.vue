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
export default {
    name:'App',
    components:{MySearch,MyList},
    data(){

    }
}
</script>

<style>
.album{
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}
.card{
    float: left;
    width: 33.33%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align:center;
}
.card>img{
    margin-bottom: .75rem;
    border-radius: 100px;
}
</style>