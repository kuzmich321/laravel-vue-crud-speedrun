<template>
    <div class="container">
        <div class="row create-wrapper">
            <div class="col-12 right-align">
                <button @click.prevent="goToCreate" type="button" class="create btn waves-effect waves-light">Create</button>
            </div>
        </div>

        <table class="centered striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.id}}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.name }}</td>
                    <td>
                        <button @click="goToEdit(user.id)"
                                type="button"
                                class="edit btn waves-effect waves-light">Edit
                        </button>
                        <button @click.prevent="deleteUser(user.id)"
                                type="button"
                                class="delete red btn waves-effect waves-light">Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "HomeComponent",

        computed: {
            ...mapGetters({
                users: 'user/users'
            })
        },

        data() {
            return {

            }
        },

        methods: {
            ...mapActions({
                getAllUsers: 'user/getAll',
                delete: 'user/delete'
            }),

            getAll() {
                this.getAllUsers()
            },

            goToCreate() {
                this.$router.push('/users/create')
            },

            goToEdit(userId) {
                this.$router.push('/users/edit/' + userId)
            },

            deleteUser(userId) {
                this.delete(userId)
                    .then(res => {
                        M.toast({
                            html: res,
                            classes: 'blue'
                        })

                        this.getAll()
                    })
            }
        },

        mounted() {
            this.getAll()
        }
    }
</script>

<style scoped>

    .create-wrapper {
        margin: 30px;
    }

    .edit {
        margin-right: 20px;
    }

</style>
