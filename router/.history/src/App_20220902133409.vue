<template>
   <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
          <button @click="forwardshow">前进</button>
          <button @click="backshow">后退</button>
          <button @click="goshow">向后退2步</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    forwardshow(){
     this.$router.forward()
    },
    backshow(){
     this.$router.back()
    }
  }
}
</script>

<style>

</style>
