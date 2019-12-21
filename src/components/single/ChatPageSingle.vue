<template>
    <div id="chat-page-single">

        <div class="bg-color">

        </div>

        <mu-appbar style="width: 100%;position: fixed;top: 0;" color="white">
            <mu-button icon slot="left" @click="back">
                <mu-icon color="black" value="arrow_back"></mu-icon>
            </mu-button>
            <h4 style="color: black">{{nickname}}</h4>
        </mu-appbar>

        <br><br><br>
        <section class="coversation" ref="singleHeight">
            <div v-if="showStatus === true" id="pop" v-for="(item, index) in chatMessage">

                <p class="time"><span>{{item.time}}</span></p>
                <br>
                <div :class="{'other-side': item.status === 2,'self-side': item.status === 1}">
                    <div :class="{'other-avatar': item.status === 2,'self-avatar': item.status === 1}">
                        <mu-avatar>
                            <img v-if="item.status === 1" :src="selfAvatar"/>
                            <img @click="showFriendInfo" v-if="item.status === 2" :src="avatarUrl"/>
                        </mu-avatar>
                    </div>
                    <span>{{item.content}}</span>

                </div>
            </div>
        </section>
        <br><br>


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
                websocket: null
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            showFriendInfo() {
                this.$router.push({name: 'FriendCard', params: {friendId: this.$route.params.otherId}});
            },
            async send() {
                let chat = {
                    'sendId': this.$cookies.get('userId'),
                    'receiveId': this.$route.params.otherId.toString(),
                    'content': this.inputMessage,
                    'status': '1'
                };
                console.log(JSON.stringify(chat));
                this.sendMessage(chat);
                let chatJson = {
                    'time': this.now(),
                    'content': this.inputMessage,
                    'status': 1
                };



                this.chatMessage.push(chatJson);

                this.inputMessage = '';

                this.$nextTick(()=>{
                    window.scrollTo(0, this.$refs.singleHeight.offsetHeight-window.innerHeight+250)
                });

            },
            initWebsocket() {
                let _this = this;
                this.websocket = new WebSocket('ws://localhost:8888/ws');
                this.websocket.onopen = function () {
                    // alert('连接成功');
                    let chat = {
                        'sendId': _this.$cookies.get('userId'),
                        'receiveId': '',
                        'content': 'Request connect server',
                        'status': '2'
                    };
                    _this.sendMessage(chat);
                };
                this.websocket.onclose = function () {
                    // alert('connect close');
                };
                this.websocket.onmessage = function (event) {
                    let chat = JSON.parse(event.data);
                    let chatJson = {
                        'time': chat.sendTime,
                        'content': chat.content,
                        'status': 2
                    };
                    _this.chatMessage.push(chatJson);
                    _this.$nextTick(()=>{
                        window.scrollTo(0, _this.$refs.singleHeight.offsetHeight-window.innerHeight+250)
                    });
                    console.log(event.data);
                };
                this.websocket.onerror = function () {
                    // alert('error')
                }

            },
            sendMessage(chat) {
                this.websocket.send(JSON.stringify(chat));
            },
            now() {
                let date = new Date();
                let seperator1 = "-";
                let seperator2 = ":";
                let month = date.getMonth() + 1;
                let strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                let hours = date.getHours();
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                let minutes = date.getMinutes();
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                let seconds = date.getSeconds();
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds;
                }
                let currentDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes
                    + seperator2 + seconds;
                return currentDate;
            }
        },
        mounted() {

            this.nickname = this.$route.params.friendName;
            this.avatarUrl = this.$route.params.avatarUrl;

            this.$axios({
                url: '/api/client/chat/listChatRecode',
                method: 'post',
                params: {
                    'sendId': this.$route.params.otherId,
                    'receiveId': this.$cookies.get('userId'),
                    'role': 'self'
                }
            }).then(response => {
                this.selfChat = response.data;

                this.$axios({
                    url: '/api/client/chat/listChatRecode',
                    method: 'post',
                    params: {
                        'sendId': this.$cookies.get('userId'),
                        'receiveId': this.$route.params.otherId,
                        'role': 'other'
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

                    console.log(this.chatMessage.sort(function (x, y) {
                        return new Date(x.time) - new Date(y.time);
                    }));

                    this.$nextTick(()=>{
                        window.scrollTo(0, this.$refs.singleHeight.offsetHeight-window.innerHeight+250)
                    });

                    this.showStatus = true;

                }).catch(error => {
                    console.log(error);
                });

            }).catch(error => {
                console.log(error);
            });


            if ('WebSocket' in window) {
                this.initWebsocket();
            } else {
                console.log('Not support');
            }
            this.$nextTick(()=>{
                window.scrollTo(0,this.$refs.singleHeight.offsetHeight-window.innerHeight)
            })
            // document.getElementById("kof").scrollIntoView();

        },
        destroyed() {
            this.websocket.close();
        }
    }
</script>

<style scoped lang="less">

    #chat-page-single {

        /*width: 100%;*/
        /*height: 100%;*/
        /*background-color: #eeeeee;*/

        .bg-color {
            position: fixed;
            margin-top: 0;
            width: 100%;
            height: 100%;
            background-color: #eeeeee;
            z-index: -999;
        }

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
