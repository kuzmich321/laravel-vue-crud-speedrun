<template>
    <div class="login-page-wrapper">
        <div id="login-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
                <form class="login-form">
                    <div class="row">
                        <div class="input-field col s12">
                            <input class="validate" id="email" type="email" v-model="form.email" required>
                            <label for="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" v-model="form.password" required>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="login-wrapper">
                            <button @click.prevent="login" type="button" class="login btn waves-effect waves-light">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },

        methods: {
            ...mapActions({
                signIn: 'auth/login'
            }),

            login(e) {
                e.preventDefault()

                this.signIn(this.form).then((res) => {
                    this.$router.replace({
                        name: 'home'
                    }).catch((err) => {
                        console.log(err)
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .login-page-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #login-page {
        width: 500px;
    }

    .login-wrapper {
        display: flex;
        justify-content: center;
    }

    .login {
        width: 30%;
    }
</style>
