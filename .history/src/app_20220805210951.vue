<template>
  <div>
    <img src="./assets/logo.png" alt="icon">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
    name:'app',
    components:{
        School,
        Student
    }
}
</script>

<style>

</style>