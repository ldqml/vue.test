<template>
  <div>
    <img src="./assets/logo.png" alt="icon">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './components/school'
import Student from './components/student'
export default {
    name:'app',
    components:{
        school,
        Student
    }
}
</script>

<style>

</style>