<template>
  <div class="setting">

    <div class="title-bar">
      <mu-appbar style="width: 100%;" :color="this.$store.state.themColor">
        <mu-button @click="open = true" icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        设置
      </mu-appbar>
    </div>
    <scroller>
      <mu-list style="margin-top: 48px" @change="findClick">
        <mu-divider></mu-divider>
        <mu-list-item value="dynamic" style="background-color: #ffffff" button>
          <mu-list-item-action>
            <mu-icon value="track_changes"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>账户管理</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <br>

        <mu-divider></mu-divider>

        <mu-list-item style="background-color: #ffffff" button>
          <mu-list-item-action>
            <mu-icon value="record_voice_over"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>题目收藏</mu-list-item-title>
        </mu-list-item>


        <mu-divider shallow-inset></mu-divider>

        <mu-list-item style="background-color: #ffffff" button>
          <mu-list-item-action>
            <mu-icon value="wallpaper"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>加入我们</mu-list-item-title>
        </mu-list-item>

        <mu-divider></mu-divider>

      </mu-list>

      <br>
      <mu-flex justify-content="center">
        <mu-button style="width: 90%" color="success">辅助功能</mu-button>
      </mu-flex>
      <br>
      <mu-flex justify-content="center">
        <mu-button @click="loginOut" style="width: 90%" color="error">退出登录</mu-button>
      </mu-flex>
    </scroller>
  </div>
</template>

<script>
    export default {
        name: "SettingPage",
        methods: {
            loginOut() {
                this.$cookies.remove('isLogin');
                this.$cookies.remove('user');
                this.$cookies.remove('userId');
                this.$cookies.remove('avatar');
                this.$router.push({name: 'Login'});
                this.$toast.success('注销成功');

                this.$axios({
                    url: '/api/client/user/logout',
                    method: 'get'
                }).then(response => {
                    console.log('注销成功');
                }).catch(error => {
                    console.log('注销失败');
                });
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
