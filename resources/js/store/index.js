import Vue from 'vue'
import Vuex from 'vuex'

import properties from './modules/properties'
import addProperty from './modules/add-property'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,

    modules: {
        properties,
        addProperty,
    },

    state: {
        isMobile: false,
        isSidebarCollapsed: false,
        toMobileWidth: 767
    },

    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.isSidebarCollapsed = !state.isSidebarCollapsed
        },

        SET_SIDEBAR(state, collapsed) {
            state.isSidebarCollapsed = collapsed
        },

        isMobile(state, data) {
            state.isMobile = !!data
        }
    },

    actions: {
        toggleSidebar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
})
