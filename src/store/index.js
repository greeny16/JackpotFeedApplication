import Vue from 'vue';
import Vuex from 'vuex';

import jackpot from './jackpots';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        jackpot,
    },
});
