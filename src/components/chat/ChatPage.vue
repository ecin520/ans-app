<template>
    <div class="chat-page">
        <div class="title-bar">
            <mu-appbar style="width: 100%;" color="#ba68c8">
                <mu-button @click="open = true" icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                {{title}}
            </mu-appbar>
            <mu-tabs :value.sync="active" color="#ba68c8" indicator-color="#ba68c8" full-width>
                <mu-tab>消息</mu-tab>
                <mu-tab>联系人</mu-tab>
                <mu-tab>社区</mu-tab>
            </mu-tabs>
        </div>


        <mu-drawer width="100%" :docked="true" :open.sync="open">
            <mu-button @click="open = false" style="float: right" icon color="#ba68c8">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-drawer>

        <div>

            <mu-list>
                <mu-text-field style="width: 100%" v-model="value2" placeholder="  输入关键字搜索"></mu-text-field>
                <div class="list-item" v-for="(item, index) in messageList">
                    <mu-list-item avatar button @click="fuck(item.friendName)">
                        <mu-list-item-action>
                            <mu-avatar>
                                <img  :src="item.avatarUrl"/>
                            </mu-avatar>
                        </mu-list-item-action>

                        <mu-list-item-content>
                            <mu-list-item-title>{{item.friendName}}</mu-list-item-title>
                            <mu-list-item-sub-title>
                                {{item.shortMessage}}
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-badge color="red" :content="item.badgeCount"></mu-badge>
                    </mu-list-item>
                    <mu-divider inset></mu-divider>
                </div>


            </mu-list>
            <br><br><br><br><br>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Chat',
                open: false,
                messageList: [
                    {
                        avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                        friendName: 'David',
                        shortMessage: '你好啊，很高兴认识你',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        friendName: 'Jenny',
                        shortMessage: '吃饭了吗。',
                        badgeCount: 2
                    },
                    {
                        avatarUrl: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        friendName: 'Mike',
                        shortMessage: '昨天的100什么时候还',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                        friendName: 'Fucker',
                        shortMessage: '晚上去网吧吗',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        friendName: 'Mike',
                        shortMessage: '昨天的100什么时候还',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                        friendName: 'Fucker',
                        shortMessage: '晚上去网吧吗',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        friendName: 'Mike',
                        shortMessage: '昨天的100什么时候还',
                        badgeCount: 1
                    },
                    {
                        avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                        friendName: 'Fucker',
                        shortMessage: '晚上去网吧吗',
                        badgeCount: 1
                    }
                ]
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
