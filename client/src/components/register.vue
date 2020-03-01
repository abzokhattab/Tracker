<template>
  <div >
  <h3>rerer </h3>
<h1> register </h1>
 <input type = "text" 
  name = "email"
  v-model="email"
 placeholder = "email" />
<br>
<input type = "text"
 name = "password"
 v-model="password"
  placeholder ="password"/>
<br> 
<button @click="register">
  register</button>
  </div>

</template>

<script>
  import Authentication from '@/services/Authentication'
export default {
  data () {
    return {
      email:'123' ,
      password : '123'
    } 
  }, watch :{
    email(value){
    }
  },
  mounted(){
    setTimeout(function(){
      this.email='hello world'
    },2000)
  },methods:{
   async  register(){
     const response = await Authentication.register({
       email:this.email,
       password:this.password
     })
     console.log(response.data);    }
  }
  
}
</script>

<style scoped>

</style>
