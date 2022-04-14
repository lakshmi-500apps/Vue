<template>
<div>
    <h1>question 6</h1>
    <button @click="f1()">Submit</button>
</div>
</template>
<script>
export default{
    name:"QueS6",
    data(){
        return{
            arr:[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
            count:0
            }
    },
    methods:{
        
        f1(){
           for(let i=0;i<this.arr.length-1;i++){
            for(let j=0;j<this.arr.length-1;j++){
                if (this.arr[i] == this.arr[j]){
            alert("hi")}
           }
        }    
    }
}
}
</script>