<template>
  <div class="contact-page">

    <scroller height="100%">
      <br><br><br><br><br>
      <mu-list>
        <mu-list-item :ripple="true">
            <mu-col span="8">
                <br>
                <mu-text-field
                    placeholder="输入对方ID"
                    prefix="👥"
                    style="width: 95%"
                    v-model="friendId">
                </mu-text-field>
            </mu-col>
            <mu-col span="4">
                <mu-button color="success" flat @click="searchFriend" >搜索好友</mu-button>
            </mu-col>

        </mu-list-item>
        <mu-sub-header>&nbsp;Friend</mu-sub-header>

        <div class="contact-list" v-for="(item, index) in user">
          <mu-list-item @click="friendClick(item)" avatar :ripple="true" button>
            <mu-list-item-action>
              <mu-avatar>
                <img :src="user[index].avatar_url">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{user[index].nickname}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider></mu-divider>
        </div>
      </mu-list>
      <br><br><br><br>
    </scroller>
    <br><br><br><br>
  </div>
</template>

<script>
    export default {
        name: "ContactPage",
        data() {
            return {
                user: [],
                friendId: ''
            }
        },
        methods: {
            searchFriend() {
                this.$router.push({name: 'FriendCard', params: {'friendId': this.friendId}});
            },
            friendClick(item) {
                this.$router.push(
                    {
                        name: 'ChatPageSingle', params:
                            {otherId: item.id, avatarUrl: item.avatar_url, friendName: item.nickname}
                    });
            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/friend/listAllFriendsBySid',
                method: 'post',
                params: {
                    'sid': this.$cookies.get('userId')
                }
            }).then(response => {
                this.user = response.data
                console.log(response.data)
            });
        }
    }
</script>

<style scoped>
  .contact-page {

  }
</style>
