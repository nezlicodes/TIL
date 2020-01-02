<template>
    <div class="container">
    <div class="bg-danger" v-if="error">{{ error.message }}</div>
        <h1>Regiter</h1>
        <form @submit.prevent="pressed">
        <div class='form-group'
        id="input-group-1"
        description="We'll never share your email with anyone else."
      >
        <input
        class="form-control"
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        >
      </div>
      <div class='form-group'
        id="input-group-2"
        description="We'll never share your email with anyone else."
      >
        <input
        class="form-control"
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="enter a password"
        >
      </div>

        <button class="btn btn-success mr-1" type="submit" >Submit</button>
      <button class="btn btn-primary mr-1" >Reset</button>
        </form>

       
    </div>
</template>

<script>
export default {
    name:'Register',
    methods:{
        pressed(){
            alert('sybmitted')
        }
    },
    data(){
        return{
            email:'',
            password:'',
            error:''
        }
    }
}
</script>

<style lang="css">
   
</style>