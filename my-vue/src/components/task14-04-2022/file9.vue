<template>
<div>
    <h1>question 9</h1>
    <button @click="f1()">Submit</button>
</div>
</template>
<script>
export default{
    name:"QueS9",
    data(){
        return{
            array1 : [1,0,2,3,4],
            array2 :[3,5,6,7,8,13]
            }
    },
    methods:{
        
        f1(){
           for(let i=0;i<this.array1.length-1;i++){
            for(let j=0;j<this.array2.length-1;j++){
                console.log(this.array1[i]+this.array2[j]),
                i++                
            }
           }
           }
        }    
    }
</script>