<template>
<div>
    <h1>Question 4</h1>
    <input id="ip">
    <button @click="f1()">submit</button>
</div>
</template>
<script>
export default{
    name:"QueS4",
    data(){
        return{
        list : [ 'orange', 'red', 'blue', 'black', 'white' ],
        
        }
    },
    methods:{
        f1(){
            var re=document.getElementById("ip").value
           this.list.forEach((item) => {if(item.includes(re))
          console.log(item)})
           
           
    }
    }
}
</script>