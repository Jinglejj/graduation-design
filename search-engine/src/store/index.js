import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        login: false
    },
    mutations: {
        toLogin (state) {
            state.login=true
        }
    }
})
export default store
