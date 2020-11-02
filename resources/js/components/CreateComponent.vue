<template>
    <div class="container">
        <div class="col s12 m7">
            <h2 class="header">Create User</h2>
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="email" type="email" class="validate" required v-model="fields.email">
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="name" type="text" class="validate" required v-model="fields.name">
                                <label for="name">Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="password" type="password" class="validate" required v-model="fields.password">
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action center-align">
                        <button @click.prevent="create" type="button" class="create btn btn-lg waves-effect waves-light">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "CreateComponent",

        data() {
            return {
                fields: {
                    email: null,
                    password: null,
                    name: null
                }
            }
        },

        methods: {
            ...mapActions({
                createAction: 'user/create'
            }),

            create() {
                this.createAction(this.fields)
                    .then(res => M.toast({
                        html: res,
                        classes: 'blue'
                    }))
            }
        }
    }
</script>

<style scoped>
    .create {
        width: 30%;
    }
</style>
