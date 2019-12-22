<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
    </div>

    <div class="bottom-nav">
      <mu-bottom-nav @change="bottomNavClick" ripple color="#97c872">
        <mu-bottom-nav-item value="Home" title="Home" icon="pets"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="Contest" title="Contest" icon="bubble_chart"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="Chat" title="Chat" icon="people_alt"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="Setting" title="Setting" icon="settings_applications"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            bottomNavClick(value) {
                switch (value) {
                    case 'Home':
                        this.$router.push({name: 'HomePage'});
                        break;
                    case 'Contest':
                        this.$router.push({name: 'ContestPage'});
                        break;
                    case 'Chat':
                        this.$router.push({name: 'ChatPage'});
                        break;
                    case 'Setting':
                        this.$router.push({name: 'SettingPage'});
                        break;
                }
            }
        },
        mounted() {
            // this.$router.push({name: 'HomePage'})
        }
    }
</script>


<style scoped>
  .home {
    color: #8CC7B5;
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
