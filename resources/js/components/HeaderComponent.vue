<template>
    <nav>
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo right">Laravel & Vue.js CRUD</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <template v-if="!authenticated">
                        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
                        <li><router-link :to="{ name: 'register' }">Register</router-link></li>
                    </template>

                    <li v-if="authenticated"><a href="" @click.prevent="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "HeaderComponent",

        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },

        methods: {
            ...mapActions({
                logoutAction: 'auth/logout'
            }),

            logout() {
                this.logoutAction().then(() => {
                    this.$router.go(0).catch(() => {});
                })
            }
        }
    }
</script>

<style scoped>

</style>
