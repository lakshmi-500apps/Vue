<template>
<div>
    <h1>question 10</h1>
    <button @click="f1()">Submit</button>
</div>
</template>
<script>
export default{
    name:"QueS10",
    data(){
        return{
           arr: [NaN, 0, 15, false, -22, '',undefined, 47, null]
            }
    },
    methods:{
        
        f1(){
            for(var i=0;i<this.arr.length-1;i++){
            {
                 this.arr=this.arr.reduce(this.arr[i] != Number)
             }
            }
           }
        }    
    }
</script>