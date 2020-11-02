<template>
    <div class="register-page-wrapper">
        <div id="register-page" class="row">
            <div class="col s12 z-depth-6 card-panel">
                <form class="login-form">
                    <div class="row">
                        <div class="input-field col s12">
                            <input class="validate" id="email" type="email">
                            <label for="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="register-wrapper">
                            <a href="#" class="register btn waves-effect waves-light">Register</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterComponent"
    }
</script>

<style scoped>
    .register-page-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #register-page {
        width: 500px;
    }

    .register-wrapper {
        display: flex;
        justify-content: center;
    }

    .register {
        width: 30%;
    }
</style>
