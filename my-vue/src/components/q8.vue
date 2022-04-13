<template>
    <div>
        <h1>Question 8</h1>
        <b-table :items="a" :fields="fields"></b-table>
    </div>
</template>
<script>
 export default{
        name:"PracticE",
        data(){
             return{
              a:[{email: "Eliseo@gardner.biz",id: 1,name: "id labore ex et quamlaborum"},
         {email: "Jayne_Kuhic@sydney.com",id: 2,name: "quo vero reiciendisvelitsimiliqueearum"},
         {email: "Nikita@garfield.biz",id: 3,name: "odio adipisci rerumaut animi"},
         {email:"Lew@alysha.tv",id: 4,name: "alias odio sit"}],
              fields:['id','name','email'],
            }
        },
 }
    
</script>