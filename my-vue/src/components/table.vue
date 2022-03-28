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
{ name: 'Chaitrika', id: 1,email:"chaitrika@gmail.com"},
{ name: 'Navya', id: 2,email:"navya@gmail.com" },
{ name: 'Rani', id: 3,email:"rani@gmail.com"},
{ name: 'Varsha', id: 4,email:"varsha@gmail.com"}],
fields: [
'id','name','email'
]
}
}
}
</script>