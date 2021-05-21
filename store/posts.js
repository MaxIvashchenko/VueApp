import API from '../constants'

export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    }
}

export const actions = {
    async fetch({ commit }) {
        const posts = await this.$axios.$get(
           API + "/posts"+"?_limit=4"
        );
        commit('setPosts', posts);
    }
}

export const getters = {
    posts: s => s.posts
}