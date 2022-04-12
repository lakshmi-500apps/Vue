<template>
    <div>
        <h1>Question 3</h1>
        <b-table :items="Names" :fields="fields"></b-table>
        <b-form-input id="ip" v-model="text" placeholder="Enter text to add into table"></b-form-input>
        <b-form-input id="ip1" v-model="text" placeholder="Enter text to add into table"></b-form-input>
       <b-button @click="add()">CLICK TO ADD</b-button><br><br>
        <b-button @click="remove()">DELETE ROW</b-button>
        </div>
</template>
<script>
 export default{
        name:"QueS3",
        data(){
             return{
               Names : [{firstname:"Agile",lastname:"CRM"}],
              fields:['firstname','lastname'],
            }
        },
        methods: {
              add(){
                  this.Names.push({firstname:(document.getElementById("ip1").value),lastname:(document.getElementById("ip").value)});
              },
              remove(){
                  this.Names.pop();
                  }
              }
        }
    
</script>