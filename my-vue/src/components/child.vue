<template>
<div>
    <h1>Child</h1>
    <b-form-input  id="uname" v-model="Text" type="text" placeholder="Enter your name"></b-form-input><br>

    <b-button variant="outline-primary" @click="F1()">Button</b-button>
</div>
</template>
<script>

export default{
    name:"ChilD",
    data(){
        return{
            txt:"",
        }
    },
    methods:{
        display(){
            alert("hi "+ document.getElementById("uname").value)
        },
        F1(){
             alert("hi "+ document.getElementById("uname").value)
            this.$emit('value')
        }
    }
}
</script>