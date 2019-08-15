
import axios from 'axios'
import get from 'lodash/get'

export default {
    namespaced: true,

    state: {
        items: [],
        meta: {
            current_page: 1,
            from: 1,
            last_page: 1,
            path: '#',
            per_page: 15,
            to: 1,
            total: 1
        },
        error: null
    },

    getters: {
        pluckApiErrors: state => field => state.error && state.error.errors ? get(state.error.errors, field) : null,
        item: state => id => state.items.find(item => item.id == id),
    },

    mutations: {
        SET_ITEMS(state, { data, meta }) {
            state.items = data;
            state.meta = meta;
        },
        SET_ITEM(state, { data }) {
            let index = state.items.findIndex(item => item.id === data.id);

            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...data };
            } else {
                state.items.unshift(data);
            }
        },
        SET_ERROR(state, error = null) {
            state.error = error;
        }
    },

    actions: {
        async index({ commit }, { search = null, order = null, page = null }) {
            commit('SET_ERROR')

            let params = {}

            if (search) {
                params.search = search
            }
            if (order) {
                params.order = order
            }
            if (page) {
                params.page = page
            }

            try {
                let response = await axios.get('/api/property', { params })
                commit('SET_ITEMS', response.data)
            } catch (error) {
                return false
            }

            return true
        },
        async show({ commit }, id) {
            try {
                let response = await axios.get(`/api/property/${id}`)
                commit('SET_ITEM', response.data)
            } catch (error) {
                return false
            }

            return true
        },
        async store({ commit }, data) {
            let response = {}

            try {
                response = await axios.post(`/api/property/`, data)
                commit('SET_ITEM', response.data)
            } catch (error) {
                if (error.response && error.response.status && error.response.status === 422) {
                    commit('SET_ERROR', error.response.data || {})
                } else {
                    console.error(error);
                }

                return false;
            }

            return true;
        },
        async update({ commit }, data) {
            let response = {}

            try {
                response = await axios.put(`/api/property/${data.id}`, data)
                commit('SET_ITEM', response.data)
            } catch (error) {
                if (error.response && error.response.status && error.response.status === 422) {
                    commit('SET_ERROR', error.response.data || {})
                } else {
                    console.error(error);
                }

                return false;
            }

            return true;
        },
        async destroy({ commit }, id) {
            commit('SET_ERROR')

            try {
                await axios.delete(`/api/property/${id}`)
            } catch (error) {
                return false
            }

            return true
        },
        async resetError({ commit }) {
            commit('SET_ERROR')
        }
    }
}
