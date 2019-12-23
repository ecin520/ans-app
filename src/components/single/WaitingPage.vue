<template>
    <div class="waiting-page">

        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <div class="bg-color"></div>
            <div class="loadbar">
                <strong class="bar" :style="'height:'+selfScore+'%'"></strong>
            </div>
            <div class="right-loadbar">
                <strong class="right-bar" :style="'height:'+opponentScore+'%'"></strong>
            </div>
            <div class="header-bar">
                <mu-row>
                    <mu-col span="2">
                        <mu-badge style="float: left" :content="parseInt(selfRank/100)" circle color="secondary">
                            <mu-avatar style="float: left">
                                <img :src="selfAvatar"/>
                            </mu-avatar>
                        </mu-badge>
                        <br><br>
                        <a style="color: #ffffff;float: left">{{selfNickname}}</a>
                    </mu-col>

                    <mu-col span="8">
                        <div class="time-loadbar" style="margin-top: 13px">
                            <div class="time-bar" :style="'width:'+progress+'%'"></div>
                        </div>
                    </mu-col>
                    <mu-col span="2">
                        <mu-badge style="float: right" :content="parseInt(opponentRank/100)" circle color="secondary">
                            <mu-avatar style="float: right">
                                <img :src="opponentAvatar"/>
                            </mu-avatar>
                        </mu-badge>
                        <br><br>
                        <a style="color: #ffffff;float: right">{{opponentNickname}}</a>
                    </mu-col>
                </mu-row>
                <mu-row>
                </mu-row>
            </div>
            <div class="content">
                <br><br><br>
            </div>
            <div class="items">
                <mu-flex justify-content="center">
                    <h3 style="margin: 15px;color: white;">{{currentItem.question_describe}}</h3>
                </mu-flex>
                <br><br><br>
                <mu-flex justify-content="center">
                    <mu-button @click="itemA" :color="colorA" style="width: 80%;height: 60px;color: black;">
                        {{currentItem.item_a}}
                    </mu-button>
                </mu-flex>
                <br>
                <mu-flex justify-content="center">
                    <mu-button @click="itemB" :color="colorB" style="width: 80%;height: 60px;color: black;">
                        {{currentItem.item_b}}
                    </mu-button>
                </mu-flex>
                <br>
                <mu-flex justify-content="center">
                    <mu-button @click="itemC" :color="colorC" style="width: 80%;height: 60px;color: black;">
                        {{currentItem.item_c}}
                    </mu-button>
                </mu-flex>
                <br>
                <mu-flex justify-content="center">
                    <mu-button @click="itemD" :color="colorD" style="width: 80%;height: 60px;color: black;">
                        {{currentItem.item_d}}
                    </mu-button>
                </mu-flex>
            </div>
        </mu-drawer>


        <div style="margin-top: 20%">
            <mu-row>
                <mu-col span="7">
                    <mu-flex justify-content="center">
                        <mu-avatar size="80">
                            <img :src="selfAvatar"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-col>
                <mu-col span="5">
                    <h2 style="color: #99e276">{{selfNickname}}</h2>
                    <a style="color: white">等级：{{parseInt(selfRank/100)}}</a>
                </mu-col>
            </mu-row>
        </div>

        <div class="progress">
            <mu-linear-progress v-if="opponentVisible === true" mode="determinate" :value="100" :size="5"
                                color="green"></mu-linear-progress>
            <mu-linear-progress v-if="opponentVisible === false"></mu-linear-progress>
        </div>
        <div class="waiting-background"></div>

        <div v-if="opponentVisible === true" style="position: absolute; bottom: 20%;width: 100%;">
            <mu-row>
                <mu-col span="5">
                    <div style="float: right">
                        <h2 style="color: #ff7471">{{opponentNickname}}</h2>
                        <a style="color: white">等级：{{parseInt(opponentRank/100)}}</a>
                    </div>

                </mu-col>
                <mu-col span="7">
                    <mu-flex justify-content="center">
                        <mu-avatar size="80">
                            <img :src="opponentAvatar"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-col>
            </mu-row>
        </div>
        <div v-if="opponentVisible === false" style="position: absolute; bottom: 20%;width: 100%;">
            <mu-flex justify-content="center">
                <p style="color: white;font-size: 1.3em;font-family: 'Virdwa Mono'">正在寻找对手</p><br><br>
            </mu-flex>
            <mu-flex justify-content="center">
                <mu-circular-progress :stroke-width="7" :size="76"></mu-circular-progress>
            </mu-flex>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WaitingPage",
        data() {
            return {
                opponentVisible: false,
                type_name: '',
                ws: null,
                open: false,
                progress: 0,
                time: 50,
                colorA: '',
                colorB: '',
                colorC: '',
                colorD: '',
                questions: [
                    {
                        id: '',
                        item_a: '',
                        item_ans: '',
                        item_b: '',
                        item_c: '',
                        item_d: '',
                        question_describe: '',
                        question_explain: ''
                    }
                ],
                currentItem: {
                    id: '',
                    item_a: '',
                    item_b: '',
                    item_c: '',
                    item_d: '',
                    item_ans: '',
                    question_describe: '',
                },
                userId: '',
                selfAvatar: '',
                selfNickname: '',
                selfRank: '',
                opponentId: '',
                opponentAvatar: '',
                opponentNickname: '',
                opponentRank: '',
                contestId: '',
                locked: false,
                opponentLocked: false,
                currentIndex: '',
                selfScore: 0,
                opponentScore: 0,
                opponentItem: {
                    'selectItem': '',
                    'correctItem': ''
                },
                timer: null,
                statistics: false,
                contestData: {
                    'user_a': '',
                    'user_b': '',
                    'contest_type': '',
                    'win_id': ''
                },
                contestRecord: [],
                currentSelfAns: false,
                currentOpponentAns: false
            }
        },
        methods: {
            itemA() {

                if (!this.locked) {

                    if (this.questions[this.currentIndex].item_ans === 'A') {
                        this.selfScore += 20;
                        // 自己答题准确
                        this.currentSelfAns = true;

                        this.colorA = 'success';
                    } else {
                        // 自己答题失败
                        this.currentSelfAns = false;
                        this.colorA = 'error';
                    }

                    let select = {
                        'sendId': this.userId,
                        'opponentId': this.opponentId,
                        'contestId': this.contestId,
                        'select_item': 'A',
                        'name': 'matching',
                        'score': this.selfScore
                    };
                    this.ws.send(JSON.stringify(select));

                    this.locked = true;
                }

            },
            itemB() {

                if (!this.locked) {

                    if (this.questions[this.currentIndex].item_ans === 'B') {
                        this.selfScore += 20;

                        // 自己答题准确
                        this.currentSelfAns = true;

                        this.colorB = 'success';
                    } else {

                        // 自己答题失败
                        this.currentSelfAns = false;

                        this.colorB = 'error';
                    }

                    let select = {
                        'sendId': this.userId,
                        'opponentId': this.opponentId,
                        'contestId': this.contestId,
                        'select_item': 'B',
                        'name': 'matching',
                        'score': this.selfScore
                    };
                    this.ws.send(JSON.stringify(select));

                    this.locked = true;
                }

            },
            itemC() {

                if (!this.locked) {

                    if (this.questions[this.currentIndex].item_ans === 'C') {
                        this.selfScore += 20;

                        // 自己答题准确
                        this.currentSelfAns = true;

                        this.colorC = 'success';
                    } else {

                        // 自己答题失败
                        this.currentSelfAns = false;

                        this.colorC = 'error';
                    }
                    let select = {
                        'sendId': this.userId,
                        'opponentId': this.opponentId,
                        'contestId': this.contestId,
                        'select_item': 'C',
                        'name': 'matching',
                        'score': this.selfScore
                    };
                    this.ws.send(JSON.stringify(select));
                    this.locked = true;
                }

            },
            itemD() {

                if (!this.locked) {

                    if (this.questions[this.currentIndex].item_ans === 'D') {
                        this.selfScore += 20;

                        // 自己答题准确
                        this.currentSelfAns = true;

                        this.colorD = 'success';
                    } else {

                        // 自己答题失败
                        this.currentSelfAns = false;

                        this.colorD = 'error';
                    }

                    let select = {
                        'sendId': this.userId,
                        'opponentId': this.opponentId,
                        'contestId': this.contestId,
                        'select_item': 'D',
                        'name': 'matching',
                        'score': this.selfScore
                    };
                    this.ws.send(JSON.stringify(select));
                    this.locked = true;
                }

            },
            initWebSocket() {
                let _this = this;
                this.ws = new WebSocket('ws://localhost:9999/ws');
                this.ws.onopen = function () {
                    let match = {
                        'name': 'search opponent',
                        'send_id': _this.$cookies.get('userId'),
                        'type': _this.type_name
                    };
                    _this.ws.send(JSON.stringify(match));
                };
                this.ws.onclose = function () {

                };
                this.ws.onmessage = function (event) {

                    let respData = JSON.parse(event.data);
                    console.log(respData);
                    if (respData.hasOwnProperty("contest_id") && respData.hasOwnProperty("questions")) {

                        if (respData['statistics'] === 'true') {
                            _this.statistics = true;
                        }

                        _this.contestId = respData['contest_id'];

                        _this.questions = respData['questions'];

                        if (respData['user_a'].toString() === _this.userId) {
                            _this.opponentId = respData['user_b'];
                        } else {
                            _this.opponentId = respData['user_a'];
                        }


                        _this.$axios({
                            url: '/api/client/user/getUserById',
                            method: 'post',
                            params: {
                                'id': _this.opponentId
                            }
                        }).then(response => {
                            _this.opponentAvatar = response.data['avatar_url'];
                            _this.opponentNickname = response.data['nickname'];
                            _this.opponentRank = response.data['rank'];



                            _this.opponentVisible = true;
                            _this.beginContest();
                        }).catch(error => {
                            console.log(error)
                        });

                    } else if (respData['name'] === 'matching' && respData['sendId'] === _this.opponentId) {

                        _this.opponentScore = respData['score'];

                        switch (respData['select_item']) {
                            case 'A':
                                if (_this.questions[_this.currentIndex].item_ans === 'A') {
                                    _this.opponentItem = {
                                        'selectItem': 'A',
                                        'correctItem': 'A'
                                    };
                                    _this.currentOpponentAns = true;
                                } else {
                                    _this.opponentItem = {
                                        'selectItem': 'A',
                                        'correctItem': _this.questions[_this.currentIndex].item_ans
                                    };
                                    _this.currentOpponentAns = false;
                                }
                                break;
                            case 'B':
                                if (_this.questions[_this.currentIndex].item_ans === 'B') {
                                    _this.opponentItem = {
                                        'selectItem': 'B',
                                        'correctItem': 'B'
                                    };
                                    _this.currentOpponentAns = true;
                                } else {
                                    _this.opponentItem = {
                                        'selectItem': 'B',
                                        'correctItem': _this.questions[_this.currentIndex].item_ans
                                    };
                                    _this.currentOpponentAns = false;
                                }
                                break;
                            case 'C':
                                if (_this.questions[_this.currentIndex].item_ans === 'C') {
                                    _this.opponentItem = {
                                        'selectItem': 'C',
                                        'correctItem': 'C'
                                    };
                                    _this.currentOpponentAns = true;
                                } else {
                                    _this.opponentItem = {
                                        'selectItem': 'C',
                                        'correctItem': _this.questions[_this.currentIndex].item_ans
                                    };
                                    _this.currentOpponentAns = false;
                                }
                                break;
                            case 'D':
                                if (_this.questions[_this.currentIndex].item_ans === 'D') {
                                    _this.opponentItem = {
                                        'selectItem': 'D',
                                        'correctItem': 'D'
                                    };
                                    _this.currentOpponentAns = true;
                                } else {
                                    _this.opponentItem = {
                                        'selectItem': 'D',
                                        'correctItem': _this.questions[_this.currentIndex].item_ans
                                    };
                                    _this.currentOpponentAns = false;
                                }
                                break;
                        }
                    }
                };
                this.ws.onerror = function () {

                }
            },
            countDown() {

                this.timer = setInterval(() => {
                    this.progress += 1;
                    if (this.progress >= 100 && this.progress < 130) {

                        if (this.opponentItem['selectItem'] === this.opponentItem['correctItem']) {
                            switch (this.opponentItem['selectItem']) {
                                case 'A':
                                    this.colorA = 'success';
                                    break;
                                case 'B':
                                    this.colorB = 'success';
                                    break;
                                case 'C':
                                    this.colorC = 'success';
                                    break;
                                case 'D':
                                    this.colorD = 'success';
                                    break;
                            }
                        } else {
                            switch (this.opponentItem['selectItem']) {
                                case 'A':
                                    this.colorA = 'error';
                                    break;
                                case 'B':
                                    this.colorB = 'error';
                                    break;
                                case 'C':
                                    this.colorC = 'error';
                                    break;
                                case 'D':
                                    this.colorD = 'error';
                                    break;
                            }
                        }

                        if (this.progress === 121 && this.currentSelfAns !== this.currentItem.item_ans && this.currentOpponentAns !== this.currentItem.item_ans) {
                            switch (this.currentItem.item_ans) {
                                case 'A':
                                    this.colorA = 'success';
                                    break;
                                case 'B':
                                    this.colorB = 'success';
                                    break;
                                case 'C':
                                    this.colorC = 'success';
                                    break;
                                case 'D':
                                    this.colorD = 'success';
                                    break;
                            }
                        }

                        if (this.progress === 120) {

                            let obj = {};
                            if (this.currentSelfAns === true && this.currentOpponentAns === true) {
                                obj = {
                                    'contest_id': this.contestId,
                                    'question_id': this.currentItem['id'],
                                    'win_id': 1
                                }
                            } else if (this.currentSelfAns === true && this.currentOpponentAns === false) {
                                obj = {
                                    'contest_id': this.contestId,
                                    'question_id': this.currentItem['id'],
                                    'win_id': this.userId
                                }
                            } else if (this.currentSelfAns === false && this.currentOpponentAns === true) {
                                obj = {
                                    'contest_id': this.contestId,
                                    'question_id': this.currentItem['id'],
                                    'win_id': this.opponentId
                                }
                            } else if (this.currentSelfAns === false && this.currentOpponentAns === false) {
                                obj = {
                                    'contest_id': this.contestId,
                                    'question_id': this.currentItem['id'],
                                    'win_id': 0
                                }
                            }
                            if (this.statistics === true) {
                                this.$axios({
                                    url: '/api/client/contestRecord/insertContestRecord',
                                    method: 'post',
                                    data: {
                                        'contest_id': obj['contest_id'],
                                        'question_id': obj['question_id'],
                                        'win_id': obj['win_id']
                                    }
                                }).then(response => {
                                    console.log(response.data);
                                }).catch(error => {
                                    console.log(error);
                                });
                            }


                            this.contestRecord.push(obj);
                            console.log(this.contestRecord)

                        }


                    }

                    if (this.progress >= 130) {
                        this.progress = 0;
                    }
                }, 100);
            },
            beginContest() {


                setTimeout(() => {
                    this.open = true;

                    setTimeout(() => {

                        this.countDown();

                        this.currentSelfAns = false;
                        this.currentOpponentAns = false;

                        this.opponentItem = {};
                        this.locked = false;
                        this.currentIndex = 0;
                        this.colorA = 'white';
                        this.colorB = 'white';
                        this.colorC = 'white';
                        this.colorD = 'white';
                        this.currentItem = this.questions[0];


                        setTimeout(() => {

                            this.currentSelfAns = false;
                            this.currentOpponentAns = false;

                            this.opponentItem = {};
                            this.locked = false;
                            this.currentIndex = 1;
                            this.colorA = 'white';
                            this.colorB = 'white';
                            this.colorC = 'white';
                            this.colorD = 'white';
                            this.currentItem = this.questions[1];


                            setTimeout(() => {

                                this.currentSelfAns = false;
                                this.currentOpponentAns = false;

                                this.opponentItem = {};
                                this.locked = false;
                                this.currentIndex = 2;
                                this.colorA = 'white';
                                this.colorB = 'white';
                                this.colorC = 'white';
                                this.colorD = 'white';
                                this.currentItem = this.questions[2];

                                setTimeout(() => {

                                    this.currentSelfAns = false;
                                    this.currentOpponentAns = false;

                                    this.opponentItem = {};
                                    this.locked = false;
                                    this.currentIndex = 3;
                                    this.colorA = 'white';
                                    this.colorB = 'white';
                                    this.colorC = 'white';
                                    this.colorD = 'white';
                                    this.currentItem = this.questions[3];

                                    setTimeout(() => {

                                        this.currentSelfAns = false;
                                        this.currentOpponentAns = false;

                                        this.opponentItem = {};
                                        this.locked = false;
                                        this.currentIndex = 4;
                                        this.colorA = 'white';
                                        this.colorB = 'white';
                                        this.colorC = 'white';
                                        this.colorD = 'white';
                                        this.currentItem = this.questions[4];

                                        setTimeout(() => {

                                            if (this.statistics === true) {

                                                let user_a = null;
                                                let user_b = null;
                                                let win_id = null;

                                                if (this.statistics === true) {
                                                    user_a = this.userId;
                                                    user_b = this.opponentId;
                                                } else {
                                                    user_a = this.opponentId;
                                                    user_b = this.userId;
                                                }

                                                if (this.selfScore === this.opponentScore) {
                                                    win_id = 1;
                                                } else if (this.selfScore > this.opponentScore) {
                                                    win_id = this.userId;
                                                } else if (this.selfScore < this.opponentScore) {
                                                    win_id = this.opponentId;
                                                }

                                                this.$axios({
                                                    url: '/api/client/contest/insertContest',
                                                    method: 'post',
                                                    data: {
                                                        'id': this.contestId,
                                                        'user_a': user_a,
                                                        'user_b': user_b,
                                                        'contest_type': this.type_name,
                                                        'win_id': win_id
                                                    }
                                                }).then(response => {
                                                    alert(win_id)
                                                });

                                            }

                                            this.$router.push({
                                                name: 'ContestResultPage',
                                                params: {
                                                    questions: this.questions,
                                                    selfScore: this.selfScore,
                                                    opponentScore: this.opponentScore,
                                                    selfAvatar: this.selfAvatar,
                                                    opponentAvatar: this.opponentAvatar
                                                }
                                            });

                                        }, 13000);

                                    }, 13000);

                                }, 13000);

                            }, 13000);

                        }, 13000);

                    }, 0);

                }, 2000);

            }
        },
        mounted() {

            this.userId = this.$cookies.get('userId');
            this.type_name = this.$route.params.type_name;

            this.$axios({
                url: '/api/client/user/getUserById',
                method: 'post',
                params: {
                    'id': this.userId
                }
            }).then(response => {
                this.selfAvatar = response.data['avatar_url'];
                this.selfNickname = response.data['nickname'];
                this.selfRank = response.data['rank'];
            }).catch(error => {
                console.log(error)
            });


            this.initWebSocket();


        },
        created() {



        },
        destroyed() {
            clearInterval(this.timer);
            this.ws.close();

        },
        beforeDestroy() {
            //清除定时器
            clearInterval(this.timer);
        },
        watch: {
            progress(val) {
                if (val > 100) {
                    this.locked = true;
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .waiting-page {
        .progress {
            position: absolute;
            width: 100%;
            top: 50%;
        }

        .waiting-background {
            position: fixed;
            z-index: -9999;
            top: 0;
            width: 100%;
            height: 100%;
            background: #453b48;
        }

        .bg-color {
            position: fixed;
            /*margin-top: -15px;*/
            width: 100%;
            height: 100%;
            background-color: #453b48;
            z-index: -999;
        }

        .header-bar {
            padding: 15px;
            /*background: #8CC7B5;*/
            /*background: #96d0be;*/
        }

        .loadbar {
            width: 10px;
            height: 350px;
            margin: 2px;
            background-color: #000000;
            /*border: 1px solid #ccc;*/
            border-radius: 8px;
            position: absolute;
            bottom: 0;
        }

        .bar {
            width: 100%;
            display: block;
            font-size: 12px;
            border-radius: 8px;
            background-color: #82bb7d;
            color: #fff;
            position: absolute;
            bottom: 0;
        }

        .right-loadbar {
            width: 10px;
            height: 350px;
            margin: 2px;
            background-color: #000000;
            /*border: 1px solid #ccc;*/
            border-radius: 8px;
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .right-bar {
            width: 100%;
            display: block;
            font-size: 12px;
            border-radius: 8px;
            background-color: #82bb7d;
            color: #fff;
            position: absolute;
            bottom: 0;
        }

        .time-loadbar {
            width: 100%;
            height: 10px;
            background-color: #8d8d8d;
            /*border: 1px solid #ccc;*/
            border-radius: 8px;
        }

        .time-bar {
            height: 100%;
            max-width: 100%;
            border-radius: 8px;
            background-color: #6cbb73;
            color: #6cbb73;
        }

        .items {
            height: 100px;
            width: 100%;
            position: fixed;
            bottom: 370px;
        }
    }
</style>
