<template>

<div>
<b-table
:items="items"
:fields="fields"
>
<template>
</template>
</b-table>

</div>

</template>
<script>
export default {
name:"randoM",
data() {
return {
items: [
{ name: 'Agile CRM', id: 1,description :" A company of excellence"},
{ name:"mantra technologies",id:2, description:"500apps" },
{name:"500apps Python",id:3, description:"Backend built using python"},
{ name:"500apps infinity",id:4, description:"Built using vue JS"}],
fields: [
'id','name']}
}
}
</script>