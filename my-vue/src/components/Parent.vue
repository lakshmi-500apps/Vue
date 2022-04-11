<template>
<div>
    <b-table :items="a" :fields="b"></b-table>
    <child @value="parf1()"></child>
</div>
</template>
<script>
import child from "./child.vue"
export default{
    name:"ParenT",
    components:
     child,
    data(){
        return{
            a:[{Sno:1,name:"chaitrika",branch:"CSE"},
               {Sno:2,name:"navya",branch:"IT"},
               {Sno:3,name:"mamata",branch:"Mech"},
               {Sno:4,name:"aziya",branch:"ECE"},
               {Sno:5,name:"geeta",branch:"CSE"}],
            b:['Sno','name','branch']
        }
    },
    methods:{
        parf1(){
          console.log("hi ")
        }
    }
}
</script>