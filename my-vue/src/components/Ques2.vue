<template>
<div>
    <h1>Ques2</h1><br>
    <textarea id="ta"></textarea><br>
    <button @click="f1()">Click to add</button>
</div>
</template>
<script>
export default{
    name:"QueS2",
    data(){
        return{
           a:"",
        }
    },
    methods: {
        f1(){
        this.a=""+ document.getElementById("ta").value,
        console.log(this.a.length);
        }
    },
}
</script>