<template>
    <div>
        Logged in 
        <span v-if="loggedIn"> <button class="btn btn-info" @click="signOut()"> Sign Out</button></span>
        <span v-else> </span>

       
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
    created(){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            this.loggedIn = true
            alert('logged in')
        } else {
            this.loggedIn = true
            alert('logged out')
        }
    })
    },
    methods: {
        signOut() {
            firebase.auth().signOut();
            this.$router.replace('/login')
            
        
        }
    }
}
</script>