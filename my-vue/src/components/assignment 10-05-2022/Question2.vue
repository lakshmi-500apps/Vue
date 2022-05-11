<template>
<div>    
    Question 2
    <b-form-input :disabled="disabled" v-model="value"></b-form-input>
    <b-form-input v-model="firstname" placeholder="Enter firstname"></b-form-input>
</div>
</template>
<script>
export default{
    name:"QuestioN2",
    data(){
        return{
            value:"",
            firstname:"",
            disabled:true 
        }
    },
    watch:{
        firstname(after){
            this.value=after.toUppercase()
        }
    } 
}
</script>

