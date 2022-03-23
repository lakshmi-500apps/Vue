<template>

<div>
    Props
   <h2> message:{{message}} </h2>
    <h2> name:{{name}} </h2>
   <h2> number:{{number}}</h2>
   
</div>

</template>
<script>

export default{
    name:"ChilD",
    props :{
     message: String,
     name: String,
     number: Number   
    },  

    methods:
    {
        f1(){
            alert("hii!")
        }
    }
     
}
</script>