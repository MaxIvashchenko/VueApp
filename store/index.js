export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearaToken(state) {
        state.token = null;
    },
}

export const actions = {
    nuxtServerInit({dispatch}){
        console.log('nuxtServerInit')
    },
    login({ commit }) {
        commit('setToken', 'trueToken')
    },
    logout({ commit }) {
        commit('clearaToken')
    },
}

export const getters = {
    hasToken: s => !!s.token
}