export default {
    namespaced: true,

    state: {
        users: [],
        newUser: null,
        singleUser: null,
    },

    getters: {
        users(state) {
            return state.users
        },

        singleUser(state) {
            return state.singleUser
        },

        newUser(state) {
            return state.newUser
        }
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },

        SET_SINGLE_USER(state, singleUser) {
            state.singleUser = singleUser
        },

        SET_NEW_USER(state, newUser) {
            state.newUser = newUser
        }
    },

    actions: {
        async getAll({commit}) {
            try {
                let response = await axios.get('/users')

                commit('SET_USERS', response.data.users)
            } catch (err) {
                commit('SET_USERS', [])
            }
        },

        async create({commit}, fields) {
            try {
                let response = await axios.post('/users', fields)

                commit('SET_NEW_USER', response.data.user)

                return response.data.message
            } catch (err) {
                commit('SET_NEW_USER', null)
            }
        },

        async getSingleUser({commit}, userId) {
            try {
                let response = await axios.get('/users/' + userId)

                commit('SET_SINGLE_USER', response.data.user)
            } catch (err) {
                commit('SET_SINGLE_USER', null)
            }
        },

        async update({commit, state}, fields) {
            try {
                let response = await axios.put('/users/' + state.singleUser.id, fields)

                commit('SET_SINGLE_USER', response.data.user)

                return response.data.message
            } catch (err) {
                commit('SET_SINGLE_USER', null)
            }
        },

        async delete(_, userId) {
            try {
                let response = await axios.delete('/users/' + userId);

                return response.data.message
            } catch (err) {
                console.log(err)
            }
        }
    }
}
