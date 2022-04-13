<template>
<div>
    <h1>Question 7</h1>
    <input id="ip" placeholder="enter the number">
    <button @click="f1()">submit</button>
</div>
</template>
<script>
export default{
    name:"QueS7",
    methods: {
       
        f1(){ 
            var i=Number(document.getElementById("ip").value)
            if((i)%2 == 0){
            console.log("2")}
            else{
                console.log("5")
            }}
    }
    }

</script>