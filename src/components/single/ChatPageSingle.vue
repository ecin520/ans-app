<template>
    <div id="chat-page-single">
        <mu-appbar style="width: 100%;position: sticky;top: 0;" color="white">
            <mu-button icon slot="left" @click="back">
                <mu-icon color="black" value="arrow_back"></mu-icon>
            </mu-button>
            <h4 style="color: black">{{nickName}}</h4>
        </mu-appbar>

        <div id="pop" v-for="(item, index) in chatMessage">

            <p class="time"><span>{{item.time}}</span></p>
            <br>
            <div :class="{'other-side': item.status === 2,'self-side': item.status === 1}">
                <div :class="{'other-avatar': item.status === 2,'self-avatar': item.status === 1}">
                    <mu-avatar>
                        <img src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    </mu-avatar>
                </div>
                <span>{{item.content}}</span>
            </div>
        </div>
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
                nickName: 'Jenny',
                inputMessage: '',
                chatMessage: [
                    {
                        time: '10:56',
                        content: '12345上山打老虎',
                        status: 1
                    },
                    {
                        time: '10:57',
                        content: '故人西辞黄鹤楼',
                        status: 2
                    },
                    {
                        time: '10:58',
                        content: 'Hello Siri',
                        status: 1
                    },
                    {
                        time: '10:56',
                        content: '12345上山打老虎',
                        status: 1
                    },
                    {
                        time: '10:56',
                        content: '12345上山打老虎',
                        status: 2
                    },
                    {
                        time: '10:58',
                        content: 'Hello Siri',
                        status: 1
                    },
                    {
                        time: '10:56',
                        content: '12345上山打老虎',
                        status: 1
                    },
                    {
                        time: '',
                        content: '12345上山打老虎',
                        status: 2
                    },
                    {
                        time: '10:58',
                        content: 'Hello Siri',
                        status: 1
                    },
                    {
                        time: '10:56',
                        content: '12345上山打老虎',
                        status: 1
                    },
                    {
                        time: '10:56',
                        content: '12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎12345上山打老虎',
                        status: 2
                    }
                ]
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            send() {
                document.getElementById("kof").scrollIntoView();
            }
        },
        mounted() {
            document.getElementById("kof").scrollIntoView();
        }
    }
</script>

<style scoped lang="less">

    #chat-page-single {
        position: relative;
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
