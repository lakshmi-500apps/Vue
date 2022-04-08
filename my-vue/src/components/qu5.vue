<template>
<div>
    <h1>Question 5</h1>
   <b-card v-for="hi in items" :key="hi.message">{{hi.university_name}}<br>{{hi. domains}}<br>{{hi.website_url}}<br>{{hi.state_province}}</b-card><br>
    <input placeholder="enter a country name"><br><br>
    <button @click="getData()">Submit</button>
</div>
</template>
<script>
export default {
name: 'App',
data(){
  return{
    items:[{university_name:"Awadhesh Pratap Singh University", domains:"apsurewa.nic.in", website_url:"http://www.apsurewa.nic.in/", state_province:"Madhya Pradesh"},
    {university_name:"Marywood University", domains:"marywood.edu", website_url:"http://www.marywood.edu", state_province:"null"},
    {university_name:"Lindenwood University", domains:"lindenwood.edu", website_url:"http://www.lindenwood.edu/", state_province:"null"},
    {university_name:"University of Petroleum and Energy Studies", domains:"upes.ac.in", website_url:"https://www.upes.ac.in/", state_province:"Dehradun"}]
  }
},
methods: {
    getData(){
          fetch("http://universities.hipolabs.com/search")                             
}
}
}
</script>