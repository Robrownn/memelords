<template>
    <div>
        <div v-if="!loggedIn">
        <input v-model="user.name" type="text" placeholder="Username"/>
        <input v-model="user.password" type="password" placeholder="Password"/>
        <button @click="login">Login</button>
        <hr />
        </div>

        <div v-if="loggedIn">
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
            loggedIn: false,
            jwtToken: ''
        } 
    },
    methods: {
        login: function() {
            // Send username and password to api
            axios.get("https://memelords.herokuapp.com/login?username=" + this.user.name + "&password=" + this.user.password).
            then((response) => {
                if (response.status == 200) { //Logged in OK
                    this.loggedIn = true
                    this.jwtToken = response.data.jwt
                }
            })
        }
    }
}
</script>
