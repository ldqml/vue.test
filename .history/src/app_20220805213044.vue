<template>
  <div>
    <img src="./assets/logo.png" alt="icon">
    <school-name></school-name>
    <student-name></student-name>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'
export default {
    name:'App',
    components:{
        SchoolName,
        StudentName
    }
}
</script>

<style>

</style>