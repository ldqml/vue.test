<template>
  <div>
    <img src="./assets/logo.png" alt="icon">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './components/school.vue'
import Student from './components/student.vue'
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