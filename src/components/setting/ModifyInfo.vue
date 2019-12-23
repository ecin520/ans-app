<template>
    <div class="modify-info">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
                <mu-button @click="back" icon slot="left">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                个人信息
            </mu-appbar>
            <br>
            <mu-container>
                <yd-cell-group>
                    <yd-cell-item>
                        <span slot="left">昵称：</span>
                        <yd-input slot="right" v-model="user.nickname"></yd-input>
                    </yd-cell-item>

                    <yd-cell-item>
                        <span slot="left">手机号：</span>
                        <yd-input slot="right" v-model="user.tel_number"></yd-input>
                    </yd-cell-item>

                    <yd-cell-item>
                        <yd-textarea slot="right"
                                     v-model="user.avatar_url"
                                     :show-counter="false"
                                     placeholder="头像"
                                     maxlength="100"></yd-textarea>
                    </yd-cell-item>

                    <yd-cell-item>
                        <yd-textarea
                                slot="right"
                                v-model="user.sign"
                                :show-counter="false"
                                placeholder="签名"
                                maxlength="100"></yd-textarea>
                    </yd-cell-item>
                </yd-cell-group>
                <br>
                <mu-button @click="modify" full-width color="success">修改</mu-button>
            </mu-container>



        </div>
    </div>
</template>

<script>
    export default {
        name: "ModifyInfo",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            modify() {

                this.$axios({
                    url: '/api/client/user/updateUserByNorUser',
                    method: 'post',
                    data: {
                        'id': this.user.id,
                        'username': this.user.username,
                        'nickname': this.user.nickname,
                        'avatar_url': this.user.avatar_url,
                        'tel_number': this.user.tel_number,
                        'rank': this.user.rank,
                        'sign': this.user.sign,
                        'status': this.user.status,
                        'ans_number': this.user.ans_number,
                        'correct_number': this.user.correct_number,
                        'good_at': this.user.good_at,
                        'register_time': this.user.register_time
                    }
                }).then(response => {
                    this.$toast.success('修改成功');
                    this.$router.go(-1);
                }).catch(error => {
                    this.$toast.error('修改失败');
                });

            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/user/getUserById',
                method: 'post',
                params: {
                    'id': this.$cookies.get('userId')
                }
            }).then(response => {
                this.user = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>
