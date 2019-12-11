<template>
    <div class="login">
        <br><br>
        <mu-flex class="flex-demo" justify-content="center">
            <mu-icon value="school" size="100" color="white"></mu-icon>
<!--            <img width="110px" src="../../assets/网络拓扑.png"/>-->
        </mu-flex><br><br>
        <mu-card style="width: 90%; max-width: 375px; margin: 5% auto;">
            <mu-card-header title="登陆"><br><br><br>
                <mu-text-field :full-width="100" v-model="username" placeholder="username"></mu-text-field>
                <br/>
                <mu-text-field type="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'" :full-width="100" v-model="password"
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
                password: '',
                visibility: false
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
                    if (response.data['status code'] === 200) {
                        this.$cookies.set('isLogin', 'ecin520');
                        this.$cookies.set('user', this.username);

                        this.$axios({
                            url: '/api/client/user/getUserByUsername',
                            method: 'post',
                            params: {
                                'username': this.username
                            }
                        }).then(userResponse => {
                            this.$cookies.set('userId', userResponse.data.id);
                            this.$cookies.set('avatar', userResponse.data.avatar_url);
                        }).catch(error => {
                            console.log(error)
                        });


                        this.$router.push({name: 'HomePage'});
                    }
                    this.$toast.success(response.data['message']);
                }).catch(error => {
                    console.log(error)
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
