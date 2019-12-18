<template>
    <div class="contest-result-page">
        <div class="result-background"></div>
        <mu-flex class="flex-demo" justify-content="left" fill>
            <mu-button @click="backHome" icon color="white">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-flex>
        <br><br>
        <mu-flex class="flex-demo" justify-content="center" fill>
            <span :style="selfColor">{{header1}}</span>
        </mu-flex>
        <mu-flex class="flex-wrapper" align-items="center">
            <mu-flex class="flex-demo" justify-content="center" fill>
                <mu-avatar size="79" :style="selfCycle">
                    <img :src="selfAvatar"/>
                </mu-avatar>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" fill>
                <span style="color: white;font-size: 1.5em;">{{header2}}</span>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" fill>
                <mu-avatar size="79" :style="opponentCycle">
                    <img :src="opponentAvatar"/>
                </mu-avatar>
            </mu-flex>
        </mu-flex>

        <mu-flex class="flex-demo" justify-content="center" fill>
            <br>
<!--            <span style="color: #67a89d;font-size: 2em;">题目浏览</span>-->
        </mu-flex>
        <mu-expansion-panel style="color: #8cc7b5;background: #453b48" :expand="panel === 'panel1'"
                            @change="toggle('panel1')">
            <div slot="header">第一题</div>
            <p style="color: white;font-size: 1.5em">{{questions[0].question_describe}}</p>
            <p style="color: white;">A. {{questions[0].item_a}}</p>
            <p style="color: white">B. {{questions[0].item_b}}</p>
            <p style="color: white;">C. {{questions[0].item_c}}</p>
            <p style="color: white;">D. {{questions[0].item_d}}</p>
            <p style="color: #8dcd95;font-size: 1.5em">正确答案：{{questions[0].item_ans}}</p>
            <p style="color: white;font-size: 1.5em;">题目解释：</p>
            <p style="color: #ff7527;">{{questions[0].question_explain}}</p>
        </mu-expansion-panel>
        <mu-expansion-panel style="color: #8cc7b5;background: #453b48" :expand="panel === 'panel2'"
                            @change="toggle('panel2')">
            <div slot="header">第二题</div>
            <p style="color: white;font-size: 1.5em">{{questions[0].question_describe}}</p>
            <p style="color: white;">A. {{questions[1].item_a}}</p>
            <p style="color: white">B. {{questions[1].item_b}}</p>
            <p style="color: white;">C. {{questions[1].item_c}}</p>
            <p style="color: white;">D. {{questions[1].item_d}}</p>
            <p style="color: #8dcd95;font-size: 1.5em">正确答案：{{questions[1].item_ans}}</p>
            <p style="color: white;font-size: 1.5em;">题目解释：</p>
            <p style="color: #ff7527;">{{questions[1].question_explain}}</p>
        </mu-expansion-panel>
        <mu-expansion-panel style="color: #8cc7b5;background: #453b48" :expand="panel === 'panel3'"
                            @change="toggle('panel3')">
            <div slot="header">第三题</div>
            <p style="color: white;font-size: 1.5em">{{questions[2].question_describe}}</p>
            <p style="color: white;">A. {{questions[2].item_a}}</p>
            <p style="color: white">B. {{questions[2].item_b}}</p>
            <p style="color: white;">C. {{questions[2].item_c}}</p>
            <p style="color: white;">D. {{questions[2].item_d}}</p>
            <p style="color: #8dcd95;font-size: 1.5em">正确答案：{{questions[2].item_ans}}</p>
            <p style="color: white;font-size: 1.5em;">题目解释：</p>
            <p style="color: #ff7527;">{{questions[2].question_explain}}</p>
        </mu-expansion-panel>
        <mu-expansion-panel style="color: #8cc7b5;background: #453b48" :expand="panel === 'panel4'"
                            @change="toggle('panel4')">
            <div slot="header">第四题</div>
            <p style="color: white;font-size: 1.5em">{{questions[3].question_describe}}</p>
            <p style="color: white;">A. {{questions[3].item_a}}</p>
            <p style="color: white">B. {{questions[3].item_b}}</p>
            <p style="color: white;">C. {{questions[3].item_c}}</p>
            <p style="color: white;">D. {{questions[3].item_d}}</p>
            <p style="color: #8dcd95;font-size: 1.5em">正确答案：{{questions[3].item_ans}}</p>
            <p style="color: white;font-size: 1.5em;">题目解释：</p>
            <p style="color: #ff7527;">{{questions[3].question_explain}}</p>
        </mu-expansion-panel>
        <mu-expansion-panel style="color: #8cc7b5;background: #453b48" :expand="panel === 'panel5'"
                            @change="toggle('panel5')">
            <div slot="header">第五题</div>
            <p style="color: white;font-size: 1.5em">{{questions[4].question_describe}}</p>
            <p style="color: white;">A. {{questions[4].item_a}}</p>
            <p style="color: white">B. {{questions[4].item_b}}</p>
            <p style="color: white;">C. {{questions[4].item_c}}</p>
            <p style="color: white;">D. {{questions[4].item_d}}</p>
            <p style="color: #8dcd95;font-size: 1.5em">正确答案：{{questions[4].item_ans}}</p>
            <p style="color: white;font-size: 1.5em;">题目解释：</p>
            <p style="color: #ff7527;">{{questions[4].question_explain}}</p>
        </mu-expansion-panel>

    </div>
</template>

<script>
    export default {
        name: "ContestResultPage",
        data() {
            return {
                panel: '',
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
                selfScore: 0,
                opponentScore: 0,
                header1: '',
                header2: '',
                selfCycle: '',
                opponentCycle: '',
                selfColor: '',
                selfAvatar: '',
                opponentAvatar: ''
            }
        },
        methods: {
            toggle(panel) {
                this.panel = panel === this.panel ? '' : panel;
            },
            backHome() {
                this.$router.push({name: 'HomePage'});
            }
        },
        mounted() {
            this.questions = this.$route.params.questions;
            this.selfScore = this.$route.params.selfScore;
            this.opponentScore = this.$route.params.opponentScore;
            this.selfAvatar = this.$route.params.selfAvatar;
            this.opponentAvatar = this.$route.params.opponentAvatar;

            if (this.selfScore === this.opponentScore) {
                this.header1 = '平手';
                this.header2 = '经验 + 5';
                this.selfCycle = 'color: #fff176;font-size: 3em;';
                this.opponentCycle = 'color: #fff176;font-size: 3em;';
                this.selfColor = 'color: #fff176;font-size: 3em;';
            } else if (this.selfScore > this.opponentScore) {
                this.header1 = '胜利';
                this.header2 = '经验 + 10';
                this.selfCycle = 'color: #66bb6a;font-size: 3em;';
                this.opponentCycle = 'color: #ff7043;font-size: 3em;';
                this.selfColor = 'color: #66bb6a;font-size: 3em;';
            } else if (this.selfScore < this.opponentScore) {
                this.header1 = '失败';
                this.header2 = '经验 + 0';
                this.selfCycle = 'color: #ff7043;font-size: 3em;';
                this.opponentCycle = 'color: #66bb6a;font-size: 3em;';
                this.selfColor = 'color: #ff7043;font-size: 3em;';
            }


            console.log(this.questions);
        }
    }
</script>

<style scoped lang="less">
    .result-background {
        position: fixed;
        z-index: -9999;
        top: 0;
        width: 100%;
        height: 100%;
        background: #453b48;
    }
</style>
