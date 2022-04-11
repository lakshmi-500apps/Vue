<template>
  <div>
    <h1>Question 5</h1>
    <b-form-input v-model="value" placeholder="Enter your country"></b-form-input>
    <b-button  @click="getData">Get Data</b-button>
    <b-card v-for="value in items" :key="value.domains" class="mb-2">
      <b-card-text>university_name:-- {{ value.university_name }} </b-card-text>
      <p>domains:--{{ value.domains }}</p>
      <p>website_url:--{{ value.website_url }}</p>
      <p>state_province:--{{ value.state_province }}</p>
    </b-card>
  </div>
</template>
<script>
  export default {
    name: "QueS5",
    data() {
      return {
        value: "",
        items: [],
        res: [],
      };
    },

    methods: {
      async getData() {
        const response = await fetch("http://universities.hipolabs.com/search?country=" + this.value, {
        });
        const responseText = await response.json();
        this.items = responseText.map((row) => {
          return { university_name: row.name, domains: row.domains, website_url: row.web_pages, state_province: row["state-province"] };
        });
      },
    },
  };
</script>
  
