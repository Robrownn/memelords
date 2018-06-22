<template>
    <div>
        <div v-if="!this.$store.state.loggedIn">
        <input v-model="user.name" type="text" placeholder="Username"/>
        <input v-model="user.password" type="password" placeholder="Password"/>
        <button @click="login">Login</button>
        <hr />
        </div>

        <div v-if="this.$store.state.loggedIn">
        Welcome, memelord <b>{{this.user.name}}</b>
        <hr />
        </div>
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    name: 'MemeLogin',
    data: function() {
        return {
            user: {id: 0, name: '', password: '', scopes: []},
        } 
    },
    methods: {
        login: function() {
            // Send username and password to api
            axios.get("https://memelords.herokuapp.com/login?username=" + this.user.name + "&password=" + this.user.password).
            then((response) => {
                if (response.status == 200) { //Logged in OK
                    this.$store.commit('login', response.data.jwt, this.user.name) //Commit auth credentials to store
                }
            })
        }
    }
}
</script>
