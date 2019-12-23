<template>
    <div class="contest-record">
        <mu-appbar style="width: 100%;position: fixed;top: 0;" :color="this.$store.state.themColor">
            <mu-button style="margin-top: 12px;margin-left: -9px;" @click="backHome" icon color="success">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
        </mu-appbar>

        <scroller>
            <br><br><br><br>
            <mu-card v-for="(item, index) in contest" style="margin: 7px">
                <mu-flex class="flex-wrapper" align-items="center">
                    <mu-flex class="flex-demo" justify-content="center" fill>
                        <mu-avatar size="54" style="margin: 6px">
                            <img :src="self_avatar"/>
                        </mu-avatar>
                    </mu-flex>
                    <mu-flex class="flex-demo" justify-content="center" fill>
                        <span style="font-size: 1.5em;color: #df7070">{{parseInt(userId) === item.win_id ? '获胜' : '失败'}}</span>
                    </mu-flex>
                    <mu-flex class="flex-demo" justify-content="center" fill>
                        <mu-avatar size="54" style="margin: 6px;">
                            <img @click="opponentPage(index)" :src="opponent[index].avatar_url"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-flex>
            </mu-card>

        </scroller>
    </div>
</template>

<script>
    export default {
        name: "ContestRecord",
        data() {
            return {
                contest: [],
                opponent: [],
                self_avatar: '',
                result: '',
                userId: ''
            }
        },
        methods: {
            backHome() {
                this.$router.go(-1);
            },
            opponentPage(index) {
                this.$router.push({name: 'FriendCard', params: {friendId: this.opponent[index].id}});
            }
        },
        computed: {

        },
        mounted() {

            this.$axios({
                url: '/api/client/contest/listContestsByUserAid',
                method: 'post',
                params: {
                    'uid': this.$cookies.get('userId')
                }
            }).then(response => {

                for (let i = 0; i < response.data.length; i++) {
                    this.contest.push(response.data[i])
                }

                this.$axios({
                    url: '/api/client/contest/listContestsByUserBid',
                    method: 'post',
                    params: {
                        'uid': this.$cookies.get('userId')
                    }
                }).then(resp => {

                    for (let i = 0; i < resp.data.length; i++) {
                        this.contest.push(resp.data[i])
                    }

                    let selfId = this.$cookies.get('userId');
                    this.userId = selfId;
                    let opponentId = '';

                    console.log(this.contest);

                    for (let i = 0; i < this.contest.length; i++) {

                        if (this.contest[i].user_a === parseInt(selfId)) {
                            opponentId = this.contest[i].user_b;
                        }
                        else if (this.contest[i].user_b === parseInt(selfId)) {
                            opponentId = this.contest[i].user_a;
                        }

                        this.$axios({
                            url: '/api/client/user/getUserById',
                            method: 'post',
                            params: {
                                'id': opponentId
                            }
                        }).then(r => {

                            this.opponent.push(r.data);
                            console.log(r.data);
                        }).catch(error => {
                            console.log(error);
                        });
                    }

                    this.self_avatar = this.$cookies.get('avatar');

                }).catch(error => {
                    console.log(error);
                })

            }).catch(error => {
                console.log(error);
            });

        }
    }
</script>

<style scoped>

</style>
