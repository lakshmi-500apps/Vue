<template>
<div>
    <h1>Ques3</h1><br>
    <button @click="f1()">Click to add</button>
</div>
</template>
<script>
export default{
    name:"QueS3",
    data(){
        return{
           a:[
               {"category1": [{ "name": "cat1", 
                            "description": "it is cat1",
                       "details": ["name", "category", "age", "contact"]
                }],
        }],
        b:[
            {"category2": [{ "name": "cat2", 
            "description": "it is cat2", 
            "details": ["name2", "category2", "age2", "contact2"]
            }]
        }]
    }},
    methods: {
        f1(){
        console.log(this.a[0],[2])
        console.log(this.b[0],[2]);
        }
    },
}
</script>