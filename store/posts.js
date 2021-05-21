import API from '../constants'

export const state = () => ({
    posts: [],
    postsNum: 3,
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setPostsNum(state, num) {
        state.postsNum = num;
    }
}

export const actions = {
    async fetchPosts({ commit, state }) {
        const posts = await this.$axios.$get(
           API + "/posts"+"?_limit=" + state.postsNum
        );
        commit('setPosts', posts);
    },
}

export const getters = {
    posts: s => s.posts,
    postsNum: s => s.postsNum,
}