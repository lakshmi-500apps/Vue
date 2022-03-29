<template>
<div>
    <h2>Question 2</h2>
   <h2>name:{{name}}</h2>
   <h2>description:{{description}}</h2>
   <h2>Yearsofexperience:{{Yearsofexperience}}</h2>
   <h2>Location:{{Location}}</h2>
</div>
</template>

<script>

export default{
    name:"QuestioN2",

    props: { name :String , 
      description :String, 
      Yearsofexperience:Number, 
      Location:String},

      methods: {
          f1(){
            alert("hello!");
          }
      },
    }
  
</script>