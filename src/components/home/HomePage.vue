<template>
    <div class="home-page">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" color="#ba68c8">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs :value.sync="active" color="#ba68c8" indicator-color="yellow" full-width>
                <mu-tab>主题</mu-tab>
                <mu-tab>出题榜</mu-tab>
                <mu-tab>等待开发</mu-tab>
            </mu-tabs>
        </div>

        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-drawer>


        <div class="type" v-if="active === 0">
            <mu-card-media title="新主题来袭" sub-title="全新类型-全能百科，成为一个全能小王子。">
                <img style="height: 190px" @click="picClick" src="@/assets/pic1.jpg">
            </mu-card-media>


            <div class="recent">
                <mu-row>
                    <mu-col span="4">
                        <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;" color="#ff71bf">

                            热门推荐
                        </mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能打百科</mu-button>
                        <br>
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                        <br>
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                </mu-row>
            </div>

            <div class="hot">
                <mu-row>
                    <mu-col span="4">
                        <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: smaller;"
                                   color="#ff71bf">
                            热门推荐
                        </mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能打百科</mu-button>
                        <br>
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                        <br>
                        <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                </mu-row>
            </div>
            <div class="update">
                <mu-row>
                    <mu-col span="4">
                        <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: smaller;"
                                   color="#9c27b0">

                            最近更新
                        </mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                        <br>
                        <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                    <mu-col span="4">
                        <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                        <br>
                        <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    </mu-col>
                </mu-row>
            </div>

            <h2>&nbsp;所有分类</h2>
            <mu-row style="margin: 5px">
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
            </mu-row>
            <mu-row style="margin: 5px">
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
                </mu-col>
            </mu-row>



        </div>

        <br><br><br><br><br>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Home',
                open: false,
                active: 0
            }
        },
        methods: {
            picClick() {
                alert('Pic')
            }
        }
    }
</script>

<style scoped>
    .home-page .title-bar {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .type {
    }
</style>
