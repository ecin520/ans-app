<template>
    <div class="news-page">

        <div class="bg-color"></div>

        <mu-appbar style="width: 100%;position: fixed;top: 0;" color="white">
            <mu-button icon slot="left" @click="back" :color="this.$store.state.themColor">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
<!--            <mu-flex justify-content="center">-->
                <a style="color: #8dcd95">News</a>
<!--            </mu-flex>-->
        </mu-appbar>
        <scroller>
            <br><br><br><br>
            <mu-container>
                <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                    <mu-card-header title="ecin520" sub-title="admin">
                        <mu-avatar slot="avatar">
                            <img src="https://muse-ui.org/img/avatar3.55182749.jpg">
                        </mu-avatar>
                    </mu-card-header>
                    <mu-card-title title="新的类型来袭" sub-title="2019-12-10 17:20:40"></mu-card-title>
                    <mu-card-text>
                        全能百科，涵盖所有答题类型，于12-10上线，随机从各个类型中挑选题目，挑战你全能的知识面。
                    </mu-card-text>
                    <mu-flex class="flex-wrapper" align-items="center" style="margin: 6px;">
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="https://muse-ui.org/img/avatar5.41dfb617.jpg">
                        </mu-flex>
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="https://muse-ui.org/img/avatar6.7c25c38b.jpg">
                        </mu-flex>
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="https://muse-ui.org/img/avatar2.eff5aba4.jpg">
                        </mu-flex>
                    </mu-flex>
                    <mu-card-actions>
                        <mu-flex justify-content="end">
                            <mu-button icon color="#42a5f5">
                                <mu-icon value="chat"></mu-icon>
                            </mu-button>&nbsp;&nbsp;
                            <a style="margin-top: 15px;color: #4caf50">12</a>
                            <mu-button icon :color="like" @click="likeArticle">
                                <mu-icon value="thumb_up"></mu-icon>
                            </mu-button>
                        </mu-flex>
                    </mu-card-actions>
                </mu-card>

                <br>

                <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                    <mu-card-header title="ecin520" sub-title="admin">
                        <mu-avatar slot="avatar">
                            <img src="https://muse-ui.org/img/avatar3.55182749.jpg">
                        </mu-avatar>
                    </mu-card-header>
                    <mu-card-title title="脑筋急转弯" sub-title="2019-12-08 11:24:59"></mu-card-title>
                    <mu-card-text>
                        脑筋急转弯最早起源于古代印度。就是指当思维遇到特殊的阻碍时，要很快的离开习惯的思路，从别的方面来思考问题。现在泛指一些不能用通常的思路来回答的智力问答题。
                        脑筋急转弯分类比较广泛：有益智类，搞笑类，数学类，成人类等。 脑筋急转弯是种娱乐方式，同时也是一种大众化的文字游戏。
                    </mu-card-text>
                    <mu-flex class="flex-wrapper" align-items="center" style="margin: 6px;">
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ebeb0d6871cb0a4685228c3f53589119/b812c8fcc3cec3fd1b1b48e7dc88d43f8794277f.jpg">
                        </mu-flex>
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="http://img5.imgtn.bdimg.com/it/u=146772010,144130681&fm=26&gp=0.jpg">
                        </mu-flex>
                        <mu-flex class="flex-demo" justify-content="center" >
                            <img style="padding: 3px" width="100%" src="http://img5.imgtn.bdimg.com/it/u=3342187006,606430687&fm=26&gp=0.jpg">
                        </mu-flex>
                    </mu-flex>
                    <mu-card-actions>
                        <mu-flex justify-content="end">
                            <mu-button icon color="#42a5f5">
                                <mu-icon value="chat"></mu-icon>
                            </mu-button>&nbsp;&nbsp;
                            <a style="margin-top: 15px;color: #4caf50">3</a>
                            <mu-button icon :color="like" @click="likeArticle">
                                <mu-icon value="thumb_up"></mu-icon>
                            </mu-button>
                        </mu-flex>
                    </mu-card-actions>

                </mu-card>
            </mu-container>
            <br><br><br>
        </scroller>

    </div>
</template>

<script>
    export default {
        name: "NewsPage",
        data() {
            return {
                like: '#bbdefb'
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            likeArticle() {
                this.like = '#42a5f5';
            }
        }
    }
</script>

<style scoped>
    .bg-color {
        position: fixed;
        margin-top: 0;
        width: 100%;
        height: 100%;
        background-color: #97cba0;
        z-index: -999;
    }
</style>
