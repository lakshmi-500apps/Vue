<template>
<div>
    <h1>question 8</h1>
    <button @click="f1()">Submit</button>
</div>
</template>
<script>
export default{
    name:"QueS8",
    data(){
        return{
            color:["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
            o :["st","nd","rd","th"],
            id:1
            }
    },
    methods:{
        
        f1(){
           for(let i=0;i<this.color.length-1;i++){
            for(let j=0;j<this.o.length-1;j++){
                console.log(this.id+this.o[j]+" choice is "+this.color[i]),
                i++;
                this.id++;
            }
           }
           }
        }    
    }
</script>