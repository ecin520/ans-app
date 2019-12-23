<template>
    <div class="contest-page">


        <div class="title-bar">
            <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs :color="this.$store.state.themColor" :indicator-color="this.$store.state.themColor" full-width>
                <mu-tab>
                </mu-tab>
            </mu-tabs>

        </div>

        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
                <mu-button @click="open = false" style="float: right" icon color="white">
                    <mu-icon value="home"></mu-icon>
                </mu-button>
            </mu-appbar>
            <personal-page></personal-page>
        </mu-drawer>

        <scroller>
            <br><br><br><br><br><br>

            <div style="margin: 8px;padding: 8px;">
                <mu-row>
                    <!--                <h2>书山有路勤为径</h2>-->
                </mu-row>
                <mu-row>
                    <mu-col span="6">
                        <mu-button style="width: 95%;height: 120px;" color="#66bb6a">
                            <mu-icon size="90" value="av_timer"></mu-icon>
                        </mu-button>
                    </mu-col>
                    <mu-col span="6">
                        <mu-button
                                @click="devoteQuestion"
                                style="width: 95%;height: 55px;font-family: 'Virdwa Mono'"
                                color="#66bb6a">
                            我要出题
                        </mu-button>
                        <mu-button
                                @click="mydevote"
                                style="width: 95%;height: 55px;margin-top: 10px;font-family: 'Virdwa Mono'"
                                color="#66bb6a">
                            我的出题
                        </mu-button>
                    </mu-col>
                </mu-row>
                <br><br>
                <mu-row>
                    <!--                <h2>学海无涯苦作舟</h2>-->
                </mu-row>
                <mu-row>
                    <mu-col span="6">
                        <mu-button @click="contestRecord" style="width: 95%;height: 55px;font-family: 'Virdwa Mono'" color="#81d4fa">
                            比赛记录
                        </mu-button>
                        <mu-button style="width: 95%;height: 55px;margin-top: 10px;font-family: 'Virdwa Mono'" color="#81d4fa">
                            我的答题统计
                        </mu-button>
                    </mu-col>
                    <mu-col span="6">
                        <mu-button style="width: 95%;height: 120px;" color="#81d4fa">
                            <mu-icon size="90" value="memory"></mu-icon>
                        </mu-button>
                    </mu-col>
                </mu-row>
                <br><br>

                <mu-row>
                    <mu-col span="6">
                        <mu-button style="width: 95%;height: 120px;" color="#7986cb">
                            <mu-icon size="90" value="bubble_chart"></mu-icon>
                        </mu-button>
                    </mu-col>
                    <mu-col span="6">
                        <mu-button
                                @click="review"
                                style="width: 95%;height: 55px;font-family: 'Virdwa Mono'"
                                color="#7986cb">
                            我要审题
                        </mu-button>
                        <mu-button
                                @click=""
                                style="width: 95%;height: 55px;margin-top: 10px;font-family: 'Virdwa Mono'"
                                color="#7986cb">
                            我要提建议
                        </mu-button>
                    </mu-col>
                </mu-row>
                <br><br><br><br>
            </div>

        </scroller>

    </div>
</template>

<script>
    import PersonalPage from "../single/PersonalPage";

    export default {
        name: "ContestPage",
        components: {PersonalPage},
        data() {
            return {
                title: 'Contest',
                open: false,
                progress: '12'
            }
        },
        methods: {
            devoteQuestion() {
                this.$router.push({name: 'DevoteQuestion'});
            },
            mydevote() {
                this.$router.push({name: 'MyDevote'});
            },
            contestRecord() {
                this.$router.push({name: 'ContestRecord'});
            },
            review() {
                this.$router.push({name: 'Review'});
            }
        }
    }
</script>

<style scoped>
    .title-bar {
        position: sticky;
        top: 0;
        z-index: 1;
    }
</style>
