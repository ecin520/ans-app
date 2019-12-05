<template>
    <div class="login">
        <br><br>
        <mu-flex class="flex-demo" justify-content="center">
            <img width="110px" src="../../assets/网络拓扑.png"/>
        </mu-flex><br><br>
        <mu-card style="width: 90%; max-width: 375px; margin: 0 auto;">
            <mu-card-header title="登陆"><br><br><br>
                <mu-text-field :full-width="100" v-model="username" placeholder="username"></mu-text-field>
                <br/>
                <mu-text-field type="password" :full-width="100" v-model="password"
                               placeholder="password"></mu-text-field>
                <br/>
                <div>
                    <mu-flex class="flex-demo" justify-content="center">
                        <mu-button @click="login" color="primary">Login</mu-button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <mu-button @click="register" color="secondary">Register</mu-button>
                    </mu-flex>
                </div>
            </mu-card-header>
        </mu-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$axios({
                    url: '/api/client/user/login',
                    method: 'get',
                    params: {
                        'username': this.username,
                        'password': this.password
                    }
                }).then(response => {
                    this.$toast.success(response.data)
                }).catch(error => {
                    this.$toast.error(error)
                });

            },
            register() {
                this.$router.push({path: '/Register'});
            }
        }
    }
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ba68c8;
    }

    .login-btn {
        display: flex;
        justify-content: center;
    }
</style>
