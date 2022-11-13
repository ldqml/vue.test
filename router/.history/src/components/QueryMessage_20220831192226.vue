<template>
  <div>
    <ul>
        <li v-for=" n in ">

        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'QueryMessage',
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