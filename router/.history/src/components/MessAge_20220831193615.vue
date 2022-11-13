<template>
  <ul>
    <li v-for=" n in querylist" :key="n.id">
        <router-link>{{n.title}}</router-link>
    </li>
  </ul>
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