<template>
  <div class="row">
    <div class="card">
        <a href="" target="_blank">
            <img src="../assets/logo.png" style="width: 100px">
        </a>
        <p class="card-text">xxxxxxx</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyList',
    data(){
        return{
            users:[]
        }
    },
    mounted(){
        this.$bus.$on('readuser',(user)=>{
            this.users=user
        })
    }
}
</script>

<style scoped>
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
.card-text{
    font-size: 80%;
}
</style>