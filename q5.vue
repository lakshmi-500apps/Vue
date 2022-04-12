<template>
<div><h1>Question 5</h1>
<button @click="f1()">submit</button>
</div>
</template>
<script>
export default{
    name:"QueS4",
    data(){
        return{
            
        }
    },
    methods: {
        
        f1(fname="mantra",lname="technologies"){
            console.log(fname+" "+lname)
        },
       
    },
}
</script>