<template>
<div>
     <ques2 name=" Agile CRM" description="A company of excellence" Yearsofexperience="12" Location="Hyderabad"></ques2> 
     <ques3  message="hi" name1="name1" number="1234"></ques3>
     <ques4 ref="ref"></ques4>
    
 <button @click="display()">Question 4</button>
  <ques5 ref="ref1"></ques5>
  <button @click="display2()">Question 5</button>
  <ques6></ques6>
 <ques7 ref="ref2"></ques7>
  <button @click="display3()">Question 7</button>
  </div>
</template>
<script> 
import ques2 from "./question2.vue"
import ques3 from "@/components/question3.vue"
import ques4 from "./question4.vue"
import ques5 from "./question5.vue"
import ques6 from "./question6.vue"
import ques7 from "./question7.vue"
export default {
  name: 'HelloWorld',
  
  components: {
    ques2,
    ques3,
    ques4,
    ques5,
    ques6,
    ques7
  
   },

data(){
  return {
    message:"hello props" ,
    name1:"prop1",
     number:"123",
     njh:"chaitrika",
     name :" Agile CRM" ,
    description :" A company of excellence", 
    Yearsofexperience:12,
     Location:"Hyderabad"
}
},
methods:{
  display(){
  this.$refs.ref.f1();
  },

  display2(){
   this.$refs.ref1.f2();
  },

  display3(){
    this.$refs.ref2.f7();
  }
  
}
}

</script>

