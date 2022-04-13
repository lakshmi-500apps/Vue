<template>
<div><h1>Question 3</h1>
{{time}}
</div>
</template>
<script>
export default{
    name:"QueS3",
    data(){
        return{
          time:[]  
        }
    },
    mounted(){

       setInterval(()=>{this.time=new Date()},5000)
       setTimeout(() => {this.time=new Date()},3000)
    }
}
</script>