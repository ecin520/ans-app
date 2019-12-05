<template>
    <div class="chat-page">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" color="#ba68c8">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
        </div>
        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Chat',
                open: false
            }
        }
    }
</script>

<style scoped>

</style>
