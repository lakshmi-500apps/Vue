<template>
<div>
    <h1>Ques7</h1><br>
    Select an option <select>
        <option id="op">---</option>
        <option >open</option>
        <option >closed</option>
        <option >pending</option>
    </select><br>
     <button @click="f1()">Click to add</button> 
</div>
</template>
<script>
export default{
    name:"QueS7",
    data(){
        return{
        a:[
{email: "Eliseo@gardner.biz",id: 1,name: "id labore ex et quamlaborum",status:"open"}, 
{email: "Jayne_Kuhic@sydney.com",id: 2,name: "quovero reiciendis velit similiqueearum",status:"pending"},
{email: "Nikita@garfield.biz",id: 3,name:"odioadipisci rerum autanimi",status:"closed"}, 
{email: "Lew@alysha.tv",id: 4,name: "alias odio sit",status:"pending"}
]
    }
    },
    methods:{
    f1(){
        if((this.a.status="open")&&(document.getElementById("op").innerHTML)){
        console.log(this.a[0]);
        }
        else if((this.a.status="closed")&&(document.getElementById("op").innerHTML)){
        console.log(this.a);
        }
        else if((this.a.status="pending")&&(document.getElementById("op").innerHTML)){
        console.log(this.a);
        }
    }
    }
}
</script>