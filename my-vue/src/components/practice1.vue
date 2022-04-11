<template>
    <div>
        <h1>List of employees</h1>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <b-table :items="a" :fields="fields"></b-table>
        <b-modal id="modal" @ok="add()">
          <b-form-input id="ip" v-model="text" placeholder="Enter text to add into table" ></b-form-input>
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
              a:[{id:1,name:"chaitrika"},
                 {id:2,name:"navya"},
                 {id:3,name:"aziya"},
                 {id:4,name:"preethi"}],
              fields:['id','name'],
            }
        },
        methods: {
              add(){
                  this.a.push({id:(this.i++),name:(document.getElementById("ip").value)});
              },
              remove(){
                  this.a.pop();
                  }
              }
        }
    
</script>