<template>
<div>
    <h1>Question 10</h1>
    <button @click="f1()">Submit</button>
    </div>
    </template>
   <script>

export default{
  name:"QueS10",
    methods:{
        f1(){
            try{
             this.test.count = this.count * 5;
            console.log("printing count",this.count);
        }  
            catch(ReferenceError){
             console.log(ReferenceError);
             console.log("error!")
       }
        }
}
}
 </script>