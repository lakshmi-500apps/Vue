<template>
<div>
    <h2>Question 9</h2>
    <button @click="fun()">Submit</button>
</div>
</template>
<script>

export default{
    name:"QuestioN",
    data() {
        return {
             a:['a',2,3],
        b :[4,'b',6],
    
        }
    },
    mounted(){
        this.a=[...this.a,...this.b]
        },
methods: {
    fun(){
       alert(this.a);
    }
},
}
</script>