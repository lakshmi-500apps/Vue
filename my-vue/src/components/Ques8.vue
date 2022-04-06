<template>
<div>
    <h1>Ques 8</h1>
    <p @click="f1()"> Click to display the text</P>
    <textarea id="ta" placeholder="Type here to edit the text"> </textarea>
</div>
</template>
<script>
export default{
name:"QueS8",
data(){
return{
a:"",
}
},
methods:{
f1(){
this.a = ''+document.getElementById("ta").value
document.write(this.a)
}
}
}
</script>



