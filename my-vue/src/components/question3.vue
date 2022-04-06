<template>

<div>
  <h2>Question3</h2>
   <h2> message:{{message}} </h2>
    <h2> name1:{{name1}} </h2>
   <h2> number:{{number}}</h2>
   
</div>
</template>
<script>
export default{
    name:"QuestioN3",
    props :{
     message: String,
     name1: String,
     number: Number   
    },  
     
}
</script>