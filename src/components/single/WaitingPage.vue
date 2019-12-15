<template>
    <div class="waiting-page">
        <div style="margin-top: 20%">
            <mu-row>
                <mu-col span="7">
                    <mu-flex justify-content="center">
                        <mu-avatar size="80">
                            <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-col>
                <mu-col span="5">
                    <h2 style="color: #99e276">易小凡</h2>
                    <a style="color: white">24&nbsp;&nbsp;&nbsp;二年级</a>
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
                        <h2 style="color: #ff7471">汤玛鲁</h2>
                        <a style="color: white">24&nbsp;&nbsp;&nbsp;初一</a>
                    </div>

                </mu-col>
                <mu-col span="7">
                    <mu-flex justify-content="center">
                        <mu-avatar size="80">
                            <img src="https://atts.w3cschool.cn/attachments/cover/cover_go.png?imageView2/1/w/64/h/64&t=1569050561"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-col>
            </mu-row>
        </div>
        <div v-if="opponentVisible === false" style="position: absolute; bottom: 20%;width: 100%;">
            <mu-flex justify-content="center">
                <h2 style="color: white">正在寻找对手</h2>
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
                opponentVisible: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.opponentVisible = true;
                setTimeout(() => {
                    this.$router.push({name: 'ContestSinglePage'});
                }, 2000);
            }, 3000);
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
    }
</style>
