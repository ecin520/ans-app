<template>
    <div class="friend-card">
        <div class="showCard" v-if="showCardFlag === '1'">
            <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
                <mu-button @click="back" style="float: left" icon color="white">
                    <mu-icon value="home"></mu-icon>
                </mu-button>
                <mu-button @click="addFriend" style="float: right" icon color="white">
                    <mu-icon value="add_circle_outline"></mu-icon>
                </mu-button>
            </mu-appbar>
            <div class="avatar-background">
                <a style="color: white;font-size: 1.6em;">{{user.nickname}}</a><br>
                <a style="color: white;font-size: 1em;">ID : {{user.id}}</a>
            </div>
            <div class="avatar">
                <mu-flex class="flex-wrapper" justify-content="center">
                    <!--                <a style="color: white">nickname</a>-->
                    <mu-avatar size="90">
                        <img :src="user.avatar_url"/>
                    </mu-avatar>
                    <!--                <a style="color: white">nickname</a>-->
                </mu-flex>
            </div>
            <br>
            <div class="content">
                <br><br><br>
                <a style="color: #2b2b2b;font-size: 1.1em;"><a style="color: #58b1ec">个人签名：</a>
                    {{user.sign}}</a>
                <br> <br>
                <mu-chip style="float: left" color="#ff7043">
                    Tel：{{user.tel_number}}
                </mu-chip>
                <mu-chip style="float: right" color="teal">
                    擅长类型：{{user.good_at}}
                </mu-chip>
                <br><br>
                <mu-chip style="float: left" color="#a1887f">
                    等级：{{level}}
                </mu-chip>
                <mu-chip style="float: right" color="#40c4ff">
                    注册时间：{{user.register_time}}
                </mu-chip>
                <br><br>
                <mu-chip style="float: left" color="#ab47bc">
                    学历：{{education}}
                </mu-chip>
                <br><br><br>
                <mu-flex justify-content="center">
                    <div style="float: left">
                        <p style="font-size: 1.3em">正确率: {{(user.correct_number/user.ans_number).toFixed(3)*100}}%</p>
                        <mu-circular-progress
                                class="demo-circular-progress"
                                mode="determinate"
                                :value="(user.correct_number/user.ans_number).toFixed(3)*100"
                                color="success"
                                :stroke-width="7"
                                :size="76">
                        </mu-circular-progress>
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div style="float: right">
                        <p style="font-size: 1.3em">排名: 80%</p>
                        <mu-circular-progress
                                class="demo-circular-progress"
                                mode="determinate"
                                :value="80"
                                color="red"
                                :stroke-width="7"
                                :size="76">
                        </mu-circular-progress>
                    </div>
                </mu-flex>

            </div>
        </div>
        <div class="showNoCard" v-if="showCardFlag === '2'">
            <mu-appbar style="width: 100%;font-family: 'Virdwa Mono'" :color="this.$store.state.themColor">
                <mu-button @click="back" style="float: left" icon color="white">
                    <mu-icon value="home"></mu-icon>
                </mu-button>
            </mu-appbar>
            <br>
            <mu-flex justify-content="center">
                <p style="text-align: center;color: salmon;font-family: 'Virdwa Mono';font-size: 2em">查无此人</p>
            </mu-flex>

        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    id: '',
                    username: '',
                    nickname: '',
                    avatar_url: '',
                    tel_number: '',
                    rank: '',
                    sign: '',
                    ans_number: '',
                    correct_number: '',
                    good_at: '',
                    register_time: ''
                },
                showCardFlag: '',
                education: '',
                exp: '',
                level: ''
            }
        },
        methods: {
            back() {
                this.$router.push({name: 'HomePage'});
            },
            addFriend() {
                this.$axios({
                    url: '/api/client/verification/insertVerification',
                    method: 'post',
                    data: {
                        'send_id': this.$cookies.get('userId'),
                        'receive_id': this.$route.params.friendId
                    }
                }).then(response => {
                    this.$toast.success(response.data['message']);
                }).catch(error => {
                    this.$toast.error(error);
                });
            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/user/getUserById',
                method: 'post',
                params: {
                    'id': this.$route.params.friendId
                }
            }).then(response => {
                this.user = response.data;
                console.log(response.data);
                if (response.data === '') {
                    this.showCardFlag = '2'
                } else {
                    this.showCardFlag = '1'
                }

                this.exp = this.user.rank % 100;

                this.level = parseInt(this.user.rank / 100);

                this.education = this.getEducation(this.user.rank);

            }).catch(error => {
                this.showCardFlag = '2';
                console.log(error)
            });
        }
    }
</script>

<style scoped lang="less">
    .friend-card {

        .avatar-background {
            display: block;
            width: 100%;
            height: 18vh;
            background: #26c6da;
            text-align: center;
            /*color: white;*/
            /*font-size: 3em;*/
        }

        .avatar {
            margin-top: -40px;
        }

        .content {
            /*background: #f8f7ff;*/
            width: 100%;
            /*height: 35vh;*/
            margin-top: -71px;
            padding: 10px;
        }
    }


</style>
