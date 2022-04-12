<template>
<div>
    <h1>Question 7</h1>
    
    <b-table  :items="arr" :fields="fields" ></b-table>
    <cheerios></cheerios>
</div>
</template>
<script>

import cheerios from "/home/agile/Desktop/Vue/my-vue/learn-cheerio/coutries.json"
export default{
    name:"QueS7",
    components:{
          cheerios
    },
    data(){
        return{
             arr:[cheerios],
             fields:['url']
        }
    },
    methods:{

    }
}
</script>