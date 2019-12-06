<template>
    <div class="chat-page">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" color="#ba68c8">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs style="margin-bottom: -8px" :value.sync="active" color="#ba68c8" indicator-color="#ba68c8" full-width>
                <mu-tab>消息</mu-tab>
                <mu-tab>联系人</mu-tab>
                <mu-tab>发现</mu-tab>
            </mu-tabs>
        </div>


        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-drawer>

        <div v-if="active === 0">
            <message-page></message-page>
        </div>
        <div v-if="active === 1">
            <contact-page></contact-page>
        </div>
        <div v-if="active === 2">
            <find></find>
        </div>

    </div>
</template>

<script>
    import MessagePage from "./MessagePage";
    import ContactPage from "./ContactPage";
    import Find from "./Find";
    export default {
        components: {Find, MessagePage, ContactPage},
        data() {
            return {
                title: 'Chat',
                open: false,
                active: 0
            }
        }
    }
</script>

<style scoped>
    .title-bar {
        position: sticky;
        top: 0;
        z-index: 11;
    }
</style>
