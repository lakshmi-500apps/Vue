<template>
  <div>
    
    <p>{{items}}</p>
  </div>
</template>

<script>
  export default {
      name:"HellO",
    data() {
      return {
        items: [
          { API: 'AdoptAPet', Description: 'Resource to help get pets adopted', Auth: 'apiKey', HTTPS: true, Cors: 'yes'},
          { API: 'Axolotl', Description: 'Collection of axolotl pictures and facts', Auth: '', HTTPS: true, Cors: 'no'},
          { API: 'Cat Facts', Description: 'Daily cat facts', Auth: '', HTTPS: true, Cors: 'no'},
          ]
      }
    }
  }
</script>