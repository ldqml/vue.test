<template>
  <div>
    <img src="./assets/logo.png" alt="icon">
    <school-name></school-name>
    <student-name></student-name>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName'
import StudentName from './components/StudentName'
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