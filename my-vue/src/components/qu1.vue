<template>
<div>
    <h1>Question 1</h1>
    <p id="demo"></p>
    <button @click="f1()">submit</button>
</div>
</template>
<script>
export default{
    name:"QueS1",
    data(){
        return{
        Users :[{name:"500apps",id:1},
        {name:"Technologies",id:2},
        {name:"Agile",id:3},
        {name:"Mantra",id:4},
        {name:"Clockly",id:5},
        {name:"CRM",id:6},
        {name:"pushninja",id:7}]
        }
    },
    methods:{
        f1(){
            var a=this.Users
            console.log(a.reverse())
        }
    }
}
</script>