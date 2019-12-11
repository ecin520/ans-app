<template>
    <div class="message-page">

        <mu-drawer width="90%" :open.sync="messageNotice">
            <mu-button @click="messageNotice = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="clear"></mu-icon>
            </mu-button>
            <mu-list>
                <mu-list-item><h3>{{noverification}}</h3></mu-list-item>
                <mu-divider></mu-divider>
                <div class="list-item" v-for="(item, index) in verificationList">
                    <mu-list-item avatar>
                        <mu-list-item-action>
                            <mu-avatar>
                                <img :src="item.avatar_url"/>
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            {{item.nickname}}
                        </mu-list-item-content>
                        <mu-button flat small @click="agreeFriend(item.id)" style="float: right" color="success">
                            同意
                        </mu-button>
                        <mu-button flat small @click="" style="float: right" color="error">
                            拒绝
                        </mu-button>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                </div>
            </mu-list>
        </mu-drawer>


        <scroller>
            <br><br><br><br><br>
            <mu-list>
                <mu-list-item avatar button @click="showNotice">
                    <h3>消息通知</h3>
                </mu-list-item>
                <div v-if="showStatus === true" class="list-item" v-for="(item, index) in messageList">
                    <mu-list-item avatar button @click="messageClick(item)">
                        <mu-list-item-action>
                            <mu-avatar>
                                <img :src="item.avatarUrl"/>
                            </mu-avatar>
                        </mu-list-item-action>

                        <mu-list-item-content>
                            <mu-list-item-title>{{item.friendName}}</mu-list-item-title>
                            <mu-list-item-sub-title>
                                {{item.shortMessage}}
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-badge v-if="item.badgeCount !== 0" color="red" :content="item.badgeCount"></mu-badge>
                    </mu-list-item>
                    <mu-divider inset></mu-divider>
                </div>
            </mu-list>
            <br><br><br><br><br>
        </scroller>


    </div>
</template>

<script>
    export default {
        name: "MessagePage",
        data() {
            return {
                messageList: [
                    {
                        avatarUrl: '',
                        otherId: '',
                        friendName: '',
                        shortMessage: '',
                        badgeCount: ''
                    }
                ],
                verificationList: [
                    {
                        id: '',
                        nickname: '',
                        avatar_url: ''
                    }
                ],
                messageNotice: false,
                noverification: '',
                showStatus: false
            }
        },
        methods: {
            messageClick(item) {
                this.$router.push(
                    {
                        name: 'ChatPageSingle', params:
                            {otherId: item.otherId, avatarUrl: item.avatarUrl, friendName: item.friendName}
                    });
            },
            showNotice() {
                this.messageNotice = true;
            },
            agreeFriend(oid) {

                this.$axios({
                    url: '/api/client/verification/updateVerificationsStatus',
                    method: 'post',
                    data: {
                        'send_id': oid,
                        'receive_id': this.$cookies.get('userId'),
                        'ver_status': 1
                    }
                }).then(response => {
                    this.$toast.success(response.data['message'].toString());
                }).catch(error => {
                    console.log(error);
                });

            }
        },
        mounted() {

            let id = '';

            this.$axios({
                url: '/api/client/chat/listAllUsersByReceiveId',
                method: 'post',
                params: {
                    'receiveId': this.$cookies.get('userId')
                }
            }).then(response => {

                this.$axios({
                    url: '/api/client/chat/listAllUsersBySendId',
                    method: 'post',
                    params: {
                        'userId': this.$cookies.get('userId')
                    }
                }).then(response0 => {

                    this.messageList = [];
                    for (let i = 0; i < response.data.length; i++) {
                        let newJson = {
                            'avatarUrl': response.data[i].avatar_url,
                            'otherId': response.data[i].id,
                            'friendName': response.data[i].nickname,
                            'shortMessage': '',
                            'badgeCount': ''
                        };
                        this.messageList.push(newJson);
                    }

                    for (let i = 0; i < response0.data.length; i++) {
                        let newJson = {
                            'avatarUrl': response0.data[i].avatar_url,
                            'otherId': response0.data[i].id,
                            'friendName': response0.data[i].nickname,
                            'shortMessage': '',
                            'badgeCount': ''
                        };
                        if(this.messageList.filter((item) => {
                            return item.otherId === response0.data[i].id;
                        }).length === 1) {
                            continue;
                        }
                        this.messageList.push(newJson);
                    }


                    for (let i = 0; i < this.messageList.length; i++) {
                        this.$axios({
                            url: '/api/client/chat/getLatestChat',
                            method: 'post',
                            params: {
                                'sendId': this.messageList[i].otherId,
                                'receiveId': this.$cookies.get('userId')
                            }
                        }).then(response => {
                            this.messageList[i].shortMessage = response.data.content;
                            this.showStatus = true;
                        }).catch(error => {

                        });

                        this.$axios({
                            url: '/api/client/chat/getUnReadCount',
                            method: 'post',
                            params: {
                                'sendId': this.messageList[i].otherId,
                                'receiveId': this.$cookies.get('userId')
                            }
                        }).then(response => {
                            this.messageList[i].badgeCount = response.data;
                            console.log()
                            this.showStatus = true;
                        }).catch(error => {

                        });

                    }

                });



            }).catch(error => {

            });

            this.$axios({
                url: '/api/client/verification/listUserUnverified',
                method: 'post',
                params: {
                    'id': this.$cookies.get('userId')
                }
            }).then(response => {
                this.verificationList = response.data;
                if (response.data.length === 0) {
                    this.noverification = '无好友请求';
                }
            }).catch(error => {
                console.log(error);
            });

        },
        created() {

        }
    }
</script>

<style scoped>

</style>
