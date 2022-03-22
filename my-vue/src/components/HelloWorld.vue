<template>

  <div class="hello">
   <whoprog></whoprog>
   <hi></hi>
  </div>
</template>

<script> 
import whoprog from "./first.vue"
import hi from "../second.vue"
export default {
  name: 'HelloWorld',
  
  components: {
   whoprog,hi
  },

  props: {
    msg: String
  }
}
</script>

