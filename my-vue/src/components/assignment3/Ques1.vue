<template>
<div>
    <h1>Ques1</h1>
    <button @click="f1()">Click to add</button>
</div>
</template>
<script>
export default{
    name:"QueS1",
    data(){
        return{
            a:[1,2,3,7,8,6,9,10],
        }
    },
    methods: {
        f1(){
            console.log(this.a)
            this.a.splice(5,0,4,5)
              console.log(this.a)
        }
    },
}
</script>