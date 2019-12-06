<template>
  <div class="message-page">
    <scroller>
      <br><br><br><br><br>
      <mu-list>
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
    </scroller>


  </div>
</template>

<script>
    export default {
        name: "MessagePage",
        data() {
            return {
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

</style>