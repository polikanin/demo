
const stateInitial = {
    name: '',
    description: '',
    location_latlng: '',
    location_title: '',
    wifi_name: '',
    wifi_password: '',

    manuals_categories: [],
    questions: [],
    rooms: [],
    rules_categories: [],
    services: [],
    image: null,
};

export default {
    namespaced: true,

    state: {
        data: { ...stateInitial }
    },

    getters: {
        data: state => state.data
    },

    mutations: {
        SET_ITEM(state, data) {
            state.data = { ...state.data, ...data };
        },
    },

    actions: {
        async set({ commit }, data) {
            commit('SET_ITEM', data)
        },
        async reset({ commit }) {
            commit('SET_ITEM', { ...stateInitial })
        },
        async save({ state, dispatch }) {
            dispatch(`properties/${store}`, state.data, {root:true})
        }
    }
}
