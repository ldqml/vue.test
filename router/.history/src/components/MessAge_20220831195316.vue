<template>
  <div>
    <ul>
    <li v-for=" n in querylist" :key="n.id">
        <router-link :to="{
            path:'/home/message/querymessage',
            query:{
                id:n.id,
                title:n.title,
            }   
        }">
        {{n.title}}
        </router-link>
    </li>
  </ul>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'MessAge',
    data(){
        return{
            querylist:[
                {id:'001',title:'Message001'},
                {id:'002',title:'Message002'},
                {id:'003',title:'Message003'}
            ]
        }
    }
}
</script>

<style>

</style>