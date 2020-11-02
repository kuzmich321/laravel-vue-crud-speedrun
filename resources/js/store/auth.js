export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, user) {
            state.user = user
        }
    },

    actions: {
        async login({dispatch}, credentials) {
            try {
                let response = await axios.post('/auth/login', credentials)

                return dispatch('attempt', response.data.token)
            } catch (err) {
                console.log(err)
            }
        },

        async attempt({commit, state}, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) return

            try {
                let response = await axios.get('/auth/me')

                commit('SET_USER', response.data)
            } catch (err) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        logout({commit}) {
            return axios.post('/auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        },

        register({dispatch, commit}, credentials) {
            return axios.post('/auth/register', credentials)
        }
    }
}
