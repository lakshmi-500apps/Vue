<template>
<div>
    <h2>Question 7</h2>
</div>
</template>
<script>
 var users = [{ id: 20, name: 'Captain Piett' }, 
             { id: 24, name: 'General Veers' }, 
             { id: 56, name:'Admiral Ozzel' }, 
             { id: 88, name: 'Commander Jerjerrod' } ];
export default{
    name:"QuestioN7",
    methods: {
       
        f7(){
             
           let index=users.findIndex(r =>  {return r.id==88});
          console.log(index)
  }
          }
        }
    

</script>