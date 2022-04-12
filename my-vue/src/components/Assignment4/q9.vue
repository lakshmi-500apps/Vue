<template>
<div>
    <h1>Question 9</h1>
    <b-form-input id="ip" v-model="Text" placeholder="Enter name"></b-form-input>
    <b-form-input id="em" v-model="Text" placeholder="Enter email"></b-form-input>
    <b-form-input id="ag" v-model="Text" placeholder="Enter age"></b-form-input>
    <b-form-input id="ph" v-model="Text" placeholder="Enter phone number"></b-form-input>
    <b-button @click="f1()">Save button</b-button>
</div>
</template>
<script>
export default{
    name:"QueS9",
    methods: {
        f1(){
            console.log("Hello"+" "+document.getElementById("ip").value+"<br>"+document.getElementById("em").value+"<br>"+
            document.getElementById("ag").value+"<br> "+document.getElementById("ph").value)
        }
    },
}
</script>