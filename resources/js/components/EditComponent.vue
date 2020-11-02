<template>
    <div class="container">
        <div class="col s12 m7">
            <h2 class="header">Edit User</h2>
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email"
                                       name="email"
                                       type="email"
                                       class="validate"
                                       v-model="fields.email">
                                <label class="active" for="email">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="name"
                                       name="name"
                                       type="text"
                                       class="validate"
                                       v-model="fields.name"
                                       placeholder="Name">
                                <label class="active" for="name">Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action center-align">
                        <button @click.prevent="update" type="button" class="edit btn btn-lg waves-effect waves-light">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "EditComponent",

        data() {
            return {
                fields: {
                    name: null,
                    email: null
                },
                userId: this.$route.params.id
            }
        },

        computed: {
            ...mapGetters({
                user: 'user/singleUser'
            })
        },

        methods: {
            ...mapActions({
                getSingleUserAction: 'user/getSingleUser',
                updateUser: 'user/update'
            }),

            getSingleUser() {
                this.getSingleUserAction(this.userId)
                    .then(() => {
                        this.fields.email = this.user.email
                        this.fields.name = this.user.name
                    })
            },

            update() {
                this.updateUser(this.fields)
                    .then(res => M.toast({
                        html: res,
                        classes: 'blue'
                    }))
            }
        },

        mounted() {
            this.getSingleUser()
        }
    }
</script>

<style scoped>
    .edit {
        width: 30%;
    }
</style>
