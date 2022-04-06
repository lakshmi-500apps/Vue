<template>
<div>
    <h2>ES6</h2><br><br>
    <h2>{{name1}}</h2>
    <button @click="f1()">Click to change</button><br><br><br>
    <button @click="f2()">for Each loop</button><br><br><br>
    <button @click="f3()">filter function</button><br><br><br>
    <button @click="f4()">map function</button><br><br><br>
    <button @click="f5()">includes method</button><br><br><br>
</div>
</template>
<script>
export default{
    name:"Es examplE",
    data(){
        return{
            a:[1,2,3],
            name1:"Mantra Technologies",
            }
    },
    methods: {
        f1(){
             this.name1="Agile CRM"
             return this.name1;
        },
        f2(){
            this.a.forEach((number,index) => {console.log(number,index)})
        },
        f3(){
            this.a.filter((number,index) => {
                if(index!=0){console.log(number)}
                })
        },
        f4(){
        var res= this.a.map((number,index) => {
             if(index==0) return 0
             return number
         })
         console.log(res)
        },
        f5(){
           var  str1='test';
            var str=`Hello ${str1}`;
            var res1=str.includes("test");
          var  res2=str.includes("hi");
           console.log(res1);
           console.log(res2)
        }
    },
}
</script>