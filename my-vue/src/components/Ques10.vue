<template>
<div>
<h1>Ques 10</h1>
<form oninput="Fulln.value = fname.value +' '+ lname.value">
First Name: <input name="fname" type="text" placeholder="Enter Firstname" required><br>
Last Name: <input name="lname" type="text" placeholder="Enter Lastname" required><br>
Full Name:<input id="fn" name="Fulln" placeholder="Fullname is"><br>
<button @click="f1()">Submit</button>
</form>
</div>
</template>
<script>
export default{
    name:"QueS10",
    methods: {
        f1(){
            alert("Full name is: "+document.getElementById("fn").value)
        }
    },
}
</script>