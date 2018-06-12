<template>
    <div>
        <input v-model="user.name" type="text" placeholder="Username"/>
        <input v-model="user.password" type="password" placeholder="Password"/>
        <button @click="login">Login</button>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'MemeLogin',
    data: function() {
        return{
            user: {id: 0, name: '', password: '', scopes: []}
        } 
    },
    methods: {
        login: function() {
            // Send username and password to api
        }
    }
}
</script>
