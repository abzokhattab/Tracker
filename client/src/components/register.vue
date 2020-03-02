<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import Authentication from '@/services/Authentication'
export default {
  data () {
    return {
      email:'' ,
      password : '',
      error :null
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
     try{
     const response = await Authentication.register({
       email:this.email,
       password:this.password
     })
     console.log(response.data); }
     catch(error){
       this.error=error.response.data.error


     }   }
  }
  
}
</script>

<style scoped>
.error {
  color:red
}
</style>
