<template>
  <div>
      <h1>Question 1</h1>
   <b-form-input id="ip" placeholder="enter to search"></b-form-input>
 <!-- <b-form-select v-model="value" :options="countries"></b-form-select>  -->
    <b-button variant="primary" @click="getData">Get Data</b-button>
    <b-table :items="items" :fields="fields">
    </b-table>
  </div>
</template>
<script>
  const { getNames } = require("country-list");
  export default {
    name: "QueS1",
    data() {
      return {
        value: "",
        items: [],
        countries: [],
      };
    },
    mounted() {
      let countries = getNames();
      this.countries = countries.map((row) => {
        return { value: row, text: row };
      });
      if (this.countries.length) this.value = this.countries[0].text;
    },
    methods: {
      redirect(value) {
        window.open(value, "_blank");
      },
      async getData() {
        const response = await fetch("http://universities.hipolabs.com/search?country=" + document.getElementById("ip").value, {
          method: "GET",
        });
        const responseText = await response.json();
        this.items = responseText.map((row) => {
          return { university_name: row.name, domains: row.domains, website_url: row.web_pages[0], state_province: row["state-province"] };
        });
      },
    },
  };
</script>
<style scoped></style>