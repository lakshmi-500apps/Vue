<template>
<div>
    <prog :mm="mm" :message="message" :name="name" ref="prog" :number="number"></prog> 
       
       

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
     mm:'dfsdf'
  }
},mounted(){
  console.log('heyyy')
},
methods:{
  buttonClick(){
    this.$refs.prog.f1();
    this.$refs.progw.f1()
   
}
  
}
}
</script>

