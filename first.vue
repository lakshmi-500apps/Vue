<template>
<div>
    <p>Hello World!</p>
</div>
</template>
<script>

export default{
    name:vue-example,
    data(){
        return{
            fname:"chaitrika",
            lname:"lagadapati",
            fullname:this.fname+" "+this.lname
        }
        },
        created(){
        
        },
        mounted(){

        },
        methods:{
             f1(){
                 console.log(fullname);
             }
        }
    }
</script>