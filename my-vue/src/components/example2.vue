<template>
<div>
    <h1>Testing</h1>
    <button @click="f1()">test</button>
</div>
</template>
<script>
export default{
    name:"ExamplE",
    data(){
        return{
            words:["Commitment HardWorking sMart Dedicated"],
           ans:["I am hardworking  employee, I am dedicated in writing code and commitment"],
              }
        },
      methods: {
           f1(){
       var alower=this.ans.toString().toLowerCase();

       for(var i=0;i<=this.words.length-1;i++){
             var wlower= this.words[i].toLowerCase();
             var wupper=this.words[i].toUpperCase();
              if (alower.includes(wlower || wupper)){
                       console.log("Success")
                }
              else {
                    console.log("fail")
                }
        }
               }
        }
      }
</script>