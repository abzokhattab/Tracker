<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off">
           <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Email"
            v-model="email"
            placeholder="Placeholder"
 
          ></v-text-field>
           </v-col>
          <br>
          <v-col cols="12" sm="6" md="3">

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
                     </v-col>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
                             <v-col cols="12" sm="6" md="3">

        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
                             </v-col>
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
.input-group--text-field input{
  border-bottom: 1px solid black
}
</style>
