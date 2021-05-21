import API from '../constants'

export const state = () => ({
    photos: [],
})

export const mutations = {
    setPhotos(state, photos) {
        state.photos = photos;
    },
}

export const actions = {
    async updatePhotos({ commit }) {
        const photos = await this.$axios.$get(
           API + "/photos"+"?_limit=8"
        );
        commit('setPhotos', photos);
    },
}

export const getters = {
    photos: s => s.photos,
}