<template>
<div>
    <h1>question 5</h1>
    <button @click="f1()">Submit</button>
</div>
</template>
<script>
export default{
    name:"QueS5",
    data(){
        return{
            arr:["Red", "Green", "White", "Black"]
        }
    },
    methods:{
        f1(){
            console.log(this.arr.join(','))
            console.log(this.arr.join(' '))
            console.log(this.arr.join('+'))
        }    
    }
}
</script>