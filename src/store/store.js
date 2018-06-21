import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    jwt: '',
    username: '',
    user_id: 0
}

const mutations = {
    login (state, jwt, username, user_id) {
        state.jwt = jwt
        state.username = username
        state.user_id = user_id
    },
    logout(state) {
        state.jwt = ''
        state.username = ''
        state.user_id = 0
    }
}

export default new Vuex.Store({
    state,
    mutations
})