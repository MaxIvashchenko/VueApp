export const state = () => ({
    token: null,
    user: null,
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearaToken(state) {
        state.token = null;
    },
    SET_USER(state, user) {
        state.user = user
      },
    
}

export const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
          // remove state
          state.commit('SET_USER', null)
    
          //redirect from here
          this.$router.push({
            path: '/auth/signin',
          })
        } else {
          const { uid, email } = authUser
          state.commit('SET_USER', {
            uid,
            email,
          })
        }
      },
    
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
    hasToken: s => !!s.token,
    getUser: s => s.user
}