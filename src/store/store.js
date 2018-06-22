import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    jwt: '',
    username: '',
    user_id: 0,
    loggedIn: false
}

const mutations = {
    login(state, jwt, username) {
        state.jwt = jwt
        state.username = username
        state.loggedIn = true
    },
    logout(state) {
        state.jwt = ''
        state.username = ''
        state.loggedIn = false
    }
}

export default new Vuex.Store({
    state,
    mutations
})