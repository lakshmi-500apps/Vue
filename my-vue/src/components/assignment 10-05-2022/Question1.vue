<template>
    <div>
        <h1>List of employees</h1>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <b-table :items="a" :fields="fields"></b-table>
        <b-modal id="modal" @ok="add()">
          <b-form-input id="ip" v-model="text" placeholder="Enter product" ></b-form-input>
          <b-form-input id="ip1" v-model="text" placeholder="Enter price" ></b-form-input>
          <b-form-input id="ip2" v-model="text" placeholder="Enter category" ></b-form-input>
        </b-modal>
        <b-button v-b-modal="'modal'">CLICK TO ADD</b-button><br>
        <br>
        <b-button @click="remove()">DELETE ROW</b-button>
        
    </div>
</template>
<script>
 export default{
        name:"PracticE",
        data(){
             return{
              i:5,
              a:[{productname:"Rice",price:80,productcategory:"grocery"},
                 {productname:"Dal",price:76,productcategory:"grocery"},
                 {productname:"Oil",price:120,productcategory:"grocery"},
                 {productname:"Soap",price:200,productcategory:"grocery"}],
              fields:["productname","price","productcategory"],
            }
        },
        methods: {
              add(){
                  this.a.push({productname:(document.getElementById("ip").value),price:(document.getElementById("ip1").value),productcategory:(document.getElementById("ip2").value)});
              },
              remove(){
                  this.a.pop();
                  }
              }
        }
    
</script>