<template>
<div>
    <h2>Question 5</h2>
  <helloworld ref="ref2"></helloworld>
</div>
</template>

<script>
import helloworld from "./HelloWorld.vue"

export default{
    name:"QuestioN5",

 components:{
     helloworld,
  } ,
  
      methods: {
     f2(){
            alert("Question 5");
          },
      },
    }
  
</script>