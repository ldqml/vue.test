<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github User</h3>
    <div>
        <input type="text" placeholder="enter your username" v-model="keyword">&nbsp;<button @click="getuser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
    name:'MySearch',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        getuser(){
            this.$bus.$emit('readuser',{isfirst:flase,isjiazai:true,err:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    console.log('请求成功了');
                    this.$bus.$emit('readuser',response.data.items)
                },
                error => {
                    console.log('请求失败',error.message);
                }
            )
        }
    }
}
</script>

<style>

</style>