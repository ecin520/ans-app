<template>
    <div id="chat-page-single">
        <mu-appbar style="width: 100%;position: sticky;top: 0;" color="white">
            <mu-button icon slot="left" @click="back">
                <mu-icon color="black" value="arrow_back"></mu-icon>
            </mu-button>
            <h4 style="color: black">{{nickname}}</h4>
        </mu-appbar>

        <div v-if="showStatus === true" id="pop" v-for="(item, index) in chatMessage">

            <p class="time"><span>{{item.time}}</span></p>
            <br>
            <div :class="{'other-side': item.status === 2,'self-side': item.status === 1}">
                <div :class="{'other-avatar': item.status === 2,'self-avatar': item.status === 1}">
                    <mu-avatar>
                        <img v-if="item.status === 1" :src="selfAvatar"/>
                        <img v-if="item.status === 2" :src="avatarUrl"/>
                    </mu-avatar>
                </div>
                <span>{{item.content}}</span>

            </div>
        </div>
        <h3>{{sb}}</h3>
        <br><br>

        <a id="kof"></a>

        <div class="message-input">
            <mu-row>
                <mu-col span="1">
                    <mu-icon style="margin: 7px;width: 100%" size="30" value="mic" color="green"></mu-icon>
                </mu-col>

                <mu-col span="7">
                    <mu-text-field style="width: 92%;margin-top: 8px;margin-left: 10px;" multi-line placeholder="请输入内容"
                                   v-model="inputMessage" full-width></mu-text-field>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="send" color="success" style="margin: 7px;width: 85%" small>发送</mu-button>
                </mu-col>
            </mu-row>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ChatPageSingle",
        data() {
            return {
                nickname: '',
                avatarUrl: '',
                selfAvatar: this.$cookies.get('avatar'),
                inputMessage: '',
                chatMessage: [
                    {
                        time: '',
                        content: '',
                        status: ''
                    },
                ],
                selfChat: [
                    {
                        "id": '',
                        "send_id": '',
                        "receive_id": '',
                        "content": '',
                        "read_status": '',
                        "time": ''
                    }
                ],
                otherChat: [
                    {
                        "id": '',
                        "send_id": '',
                        "receive_id": '',
                        "content": '',
                        "read_status": '',
                        "time": ''
                    }
                ],
                showStatus: false,
                websocket: null,
                sb: ''
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            send() {
                let chat = {
                    'sendId': this.$cookies.get('userId'),
                    'receiveId': this.$route.params.otherId,
                    'content': this.inputMessage,
                    'status': '1'
                };
                this.websocket.send(JSON.stringify(chat));
                document.getElementById("kof").scrollIntoView();
            },
            initWebsocket() {
                this.websocket = new WebSocket('ws://localhost:8888/ws');
                this.websocket.onmessage = this.onMessage();
                this.websocket.onopen = this.onOpen();
                this.websocket.onclose = this.onClose();
                this.websocket.onerror = this.onError();
            },
            onError(error) {
                console.log(error);
                alert('error');
            },
            onOpen() {
                let chat = {
                    'sendId': this.$cookies.get('userId'),
                    'receiveId': '',
                    'content': 'Request connect server',
                    'status': '2'
                };
                alert('已连接');
                if (this.websocket.readyState === 1) {
                    this.websocket.send(JSON.stringify(chat));
                } else {
                    alert('not ready')
                }
            },
            onMessage(event) {
                console.log(event);
            },
            onClose() {
                alert('close')
            }
        },
        created() {
            // this.$router.push(
            //     {path: 'ChatPageSingle', params:
            //             {'otherId': item.otherId, 'avatarUrl': item.avatarUrl, 'friendName': item.friendName}});

            this.nickname = this.$route.params.friendName;
            this.avatarUrl = this.$route.params.avatarUrl;

            this.$axios({
                url: '/api/client/chat/listChatRecode',
                method: 'post',
                params: {
                    'sendId': this.$route.params.otherId,
                    'receiveId': this.$cookies.get('userId')
                }
            }).then(response => {
                this.selfChat = response.data;

                this.$axios({
                    url: '/api/client/chat/listChatRecode',
                    method: 'post',
                    params: {
                        'sendId': this.$cookies.get('userId'),
                        'receiveId': this.$route.params.otherId
                    }
                }).then(response => {
                    this.otherChat = response.data;
                    this.chatMessage = [];

                    for (let i = 0; i < this.selfChat.length; i++) {
                        let chatJson = {
                            'time': this.selfChat[i].time,
                            'content': this.selfChat[i].content,
                            'status': 2
                        };
                        this.chatMessage.push(chatJson);
                    }

                    for (let i = 0; i < this.otherChat.length; i++) {
                        let chatJson = {
                            'time': this.otherChat[i].time,
                            'content': this.otherChat[i].content,
                            'status': 1
                        };
                        this.chatMessage.push(chatJson);
                    }
                    console.log(this.chatMessage);
                    this.showStatus = true;

                }).catch(error => {
                    console.log(error);
                });

            }).catch(error => {
                console.log(error);
            });

            document.getElementById("kof").scrollIntoView();

            if ('WebSocket' in window) {
                this.initWebsocket();
            } else {
                console.log('Not support');
            }

        }
    }
</script>

<style scoped lang="less">

    #chat-page-single {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;

        #pop {
            /*margin-top:44px;*/
            padding: 12px;

            .time {
                margin: 0;
                text-align: center;

                span {
                    padding: 0 18px;
                    display: inline-block;
                    font-size: 9pt;
                    color: #fff;
                    border-radius: 2px;
                    background-color: #df7070;
                }
            }

            .other-side .self-side {
                margin: 10px 0;
            }


            .self-side {
                text-align: right;

                .self-avatar {
                    float: right;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin: 0 0 0 10px;
                }

                span {
                    display: inline-block;
                    position: relative;
                    padding: 10px;
                    max-width: calc(100% - 90px);
                    min-height: 40px;
                    line-height: 20px;
                    font-size: 13px;
                    word-break: break-all;
                    border-radius: 7px;
                    background-color: #58b1ec;
                    color: #fff;
                }

                span:before {
                    content: "";
                    position: absolute;
                    top: 10px;
                    left: 100%;
                    border: 9px solid transparent;
                    border-left-color: #58b1ec;
                }
            }

            .other-side {
                .other-avatar {
                    float: left;
                }

                span {
                    display: inline-block;
                    position: relative;
                    padding: 10px;
                    max-width: calc(100% - 90px);
                    min-height: 40px;
                    line-height: 20px;
                    font-size: 13px;
                    word-break: break-all;
                    border-radius: 7px;
                    text-align: left;
                    background-color: white;
                    margin-left: 10px;
                }

                span:before {
                    content: " ";
                    position: absolute;
                    top: 10px;
                    right: 100%;
                    border: 9px solid transparent;
                    border-right-color: white;
                }
            }
        }

        .message-input {
            position: fixed;
            width: 100%;
            /*padding: 6px;*/
            background: white;
            bottom: -28px;
        }
    }

</style>
