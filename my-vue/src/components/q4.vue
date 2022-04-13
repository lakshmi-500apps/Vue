<template>
<div>
<h2>Question 4</h2>
<div>
<input placeholder="Enter text">
</div>
<b-button @click="getData()">submit</b-button>
<div>
{{ searchData }}
</div>
</div>
</template>
<script>
var axios = require("axios").default;
export default {
name: "sampleApis",
data() {
return {
options: {
method: "GET",
url: "http://www.json-generator.com/api/json/get/bSldINskRK",
data: { search: "" },
},
text: "",
searchData: {},
};
},
methods: {
async getData() {
this.options.data.search = this.text;
this.searchData = await axios.request(this.name);
},},};
</script>