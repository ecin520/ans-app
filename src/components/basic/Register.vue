<template>
    <div class="register">
        <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
            <mu-button icon slot="left" @click="backLogin">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
            注册
        </mu-appbar>
        <br>
        <mu-container>
            <div class="register-input">
                <mu-text-field
                        v-model="username"
                        label="UserName"
                        label-float
                        icon="account_circle">
                </mu-text-field>
                <br/>
                <mu-text-field
                        v-model="password"
                        label="Password"
                        label-float
                        type="password"
                        icon="locked">
                </mu-text-field>
                <br/>
            </div>
        </mu-container>
        <mu-flex justify-content="center">
            <mu-button @click="registerClick" :color="this.$store.state.themColor">
                注册
                <mu-icon right value="send"></mu-icon>
            </mu-button>
        </mu-flex>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            backLogin() {
                this.$router.go(-1);
            },
            registerClick() {
                this.$axios({
                    url: '/api/client/user/insertUser',
                    method: 'post',
                    data: {
                        'username': this.username,
                        'password': this.password
                    }
                }).then(response => {
                    this.$toast.success(response.data['message'].toString());
                    this.$router.push({path: '/Login'});
                }).catch(error => {
                    this.$toast.success(error.toString())
                });
            }
        }
    }
</script>

<style scoped>
    .register-input {
        margin-left: 20px;
    }
</style>
