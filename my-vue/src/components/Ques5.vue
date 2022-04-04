<template>
<div>
    <h1>Ques5</h1>
    <button @click="errorshandling()"></button>
    </div>
    </template>
    <script>
export default{
    name:"QueS5",
   methods:
   try:{
    errorshandling() {
         test = val * 45;
         console.log("test",val);
          }
     },
     catch(Error){
      console.log("error caught for given function!")
      }
    
}
</script>