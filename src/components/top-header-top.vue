<template>
    <div>
         
        <span v-if="loggedIn"> <button class="btn btn-info" @click="signOut()"> Sign Out</button></span>

       
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'
export default {
    name: 'TopHeaderComponent',
      data() {
        return {
            loggedIn:null
        }
    },
    
    created () { 
  this.loggedIn = firebase.auth().currentUser || false;
},
    
    
    methods: {
        signOut() {
            firebase.auth().signOut();
            this.$router.replace('/login')
            
        
        }
    }
}
</script>