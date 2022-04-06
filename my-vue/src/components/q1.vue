<template>
<div><h1>Question 1</h1><br><br>
 <input type="text" id="ip" placeholder="Enter the text to search"><br><br>
<button @click="f1()">submit</button>
</div>
</template>
<script>
export default{
    name:"QueS1",
    data(){
        return{
    array_names : ["agile","crm","mantra","technologies","500apps","infinity"]
    }
    },
    methods: {
        f1(){
            var i = document.getElementById("ip").value
            if(this.array_names.includes( i)){
                console.log("success");
            }
            else{
                console.log("fail");
            }
        }
    },
}
</script>