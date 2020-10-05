import api from '@/api/mock';

function initialState() {
    return {
        pots: [],
        potsIsLoading: false,
    };
}

export default {
    namespaced: false,
    root: true,

    state: initialState(),
    mutations: {
        setPots(state, pots) {
            state.pots = pots;
            state.potsIsLoading = false;
        },
        potsIsLoading(state) {
            state.potsIsLoading = true;
        },
    },
    getters: {
    },
    actions: {
        fetchPots({ commit }) {
            commit('potsIsLoading');
            return api.fetchPots().then(pots => commit('setPots', pots));
        },
    },
};
