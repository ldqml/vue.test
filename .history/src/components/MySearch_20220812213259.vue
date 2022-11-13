<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github User</h3>
    <div>
        <input type="text" placeholder="enter your username" v-model="keyword">&nbsp;<button>Search</button>
    </div>
  </section>
</template>

<script>
export default {
    name:'MySearch',
    data(){
        return{
            keyword:''
        }
    }
}
</script>

<style>

</style>