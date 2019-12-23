<template>
    <div class="home-page">
<!--        <div class="bg-color"></div>-->
        <div class="title-bar">
            <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs :value.sync="active" :color="this.$store.state.themColor" :indicator-color="this.$store.state.themColor" full-width>
                <mu-tab>主题</mu-tab>
                <mu-tab>出题榜</mu-tab>
                <mu-tab>排名</mu-tab>
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
            <div class="type" v-if="active === 0">
                <type-page></type-page>
            </div>
            <div class="questioner" v-if="active === 1">
                <questioner-page></questioner-page>
            </div>
            <div class="rank" v-if="active === 2">
                <rank></rank>
            </div>

            <br><br><br><br><br>
        </scroller>
    </div>
</template>

<script>
    import TypePage from "./TypePage";
    import QuestionerPage from "./QuestionerPage";
    import Rank from "./Rank";
    import PersonalPage from "../single/PersonalPage";

    export default {
        components: {TypePage, QuestionerPage, Rank, PersonalPage},
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
        },
        mounted() {

            // console.log(this.$store.state.themColor)

            /*获取自己id*/
            this.$axios({
                url: '/api/client/user/getUserByUsername',
                method: 'post',
                params: {
                    'username': this.$cookies.get('user')
                }
            }).then(response => {
                this.$store.state.userId = response.data.id;
                this.$cookies.set('userId', response.data.id);
                console.log(response.data.id)
            }).catch(error => {

            });

        }
    }
</script>

<style scoped>

    .bg-color {
        position: fixed;
        /*margin-top: -15px;*/
        width: 100%;
        height: 100%;
        background-color: #746677;
        z-index: -999;
    }

    .title-bar {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .type {
    }
</style>
