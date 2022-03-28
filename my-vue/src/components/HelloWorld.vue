<template>
<div>
    <prog  :message="message" :name="name" ref="prog" :number="number" :njh="njh"></prog> 
       


<button @click="buttonClick">Primary</button>
  </div>
</template>

<script> 

import prog from "../prog1.vue"

export default {
  name: 'HelloWorld',
  
  components: {
    prog,
   
},

data(){
  return {
    message:"hello props" ,
    name:"prop1",
     number:"123",
     njh:"chaitrika"
  }
},mounted(){
  console.log('heyyy')
},
methods:{
  buttonClick(){
    var a= this.$refs.prog.njh;
   console.log(a);
   }
  
}
}
</script>

