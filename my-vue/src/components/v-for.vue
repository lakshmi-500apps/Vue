<template>
<div>
    <h1>V-for</h1>
     <li v-for="hi in items" :key="hi.message">{{hi.name+" "}}{{ hi.id}}</li>
</div>
</template>
<script>
export default{
    name:"VFor",
    data() {
        return {
            items: [
              { name: 'chaitrika',id:1 },
              { name: 'navya',id:2 },
              { name: 'shailu',id:3 },
              { name: 'mamata',id:4 }]
        }
    },

}
</script>