<template>
  <div id="root">
    <dong-hua></dong-hua>
    <guo-du></guo-du>
  </div>
</template>

<script>
import DongHua from "./components/DongHua";
import GuoDu from './components/GuoDu';
import AminAte from './components/AminAte'
export default {
  components: { DongHua ,GuoDu},
    name:'App'
}
</script>

<style>

</style>