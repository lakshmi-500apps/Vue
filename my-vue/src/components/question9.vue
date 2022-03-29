<template>
<div>
    <h2>Question 9</h2>
    <button @click="fun()">Submit</button>
</div>
</template>
<script>
 var a=['a',2,3];
        var b =[4,'b',6];
      a=[...a ,...b];
export default{
    name:"QuestioN",
methods: {

fun(){
       alert(a);
    }
},
}
</script>