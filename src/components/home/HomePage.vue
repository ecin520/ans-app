<template>
    <div class="home-page">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" color="#ba68c8">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs :value.sync="active" color="#ba68c8" indicator-color="#ba68c8" full-width>
                <mu-tab>主题</mu-tab>
                <mu-tab>出题榜</mu-tab>
                <mu-tab>排名</mu-tab>
            </mu-tabs>
        </div>

        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-drawer>


        <div class="type animated bounce fadeIn" v-if="active === 0">
            <type-page></type-page>
        </div>
        <div class="questioner animated bounce fadeIn" v-if="active === 1">
            <questioner-page></questioner-page>
        </div>
        <div class="questioner animated bounce fadeIn" v-if="active === 2">
            <rank></rank>
        </div>

        <br><br><br><br><br>
    </div>
</template>

<script>
    import TypePage from "./TypePage";
    import QuestionerPage from "./QuestionerPage";
    import Rank from "./Rank";
    export default {
        components: {TypePage,QuestionerPage,Rank},
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
    .title-bar {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .type {
    }
</style>
