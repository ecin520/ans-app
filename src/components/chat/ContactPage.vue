<template>
  <div class="contact-page">
    <scroller height="100%">
      <br><br><br><br><br>
      <mu-list>
        <mu-sub-header>&nbsp;Friend</mu-sub-header>
        <div class="contact-list" v-for="(item, index) in user">

          <mu-list-item avatar :ripple="true" button>
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
                user: [
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar1.20cfec72.jpg',
                        nickname: 'Avatar'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar2.eff5aba4.jpg',
                        nickname: 'Bob'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar3.55182749.jpg',
                        nickname: 'Cat'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        nickname: 'Jenny'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar5.41dfb617.jpg',
                        nickname: 'Fucker'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar6.7c25c38b.jpg',
                        nickname: 'Word'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar1.20cfec72.jpg',
                        nickname: 'Hello'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar5.41dfb617.jpg',
                        nickname: 'Fucker'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar6.7c25c38b.jpg',
                        nickname: 'Word'
                    },
                    {
                        avatar_url: 'https://muse-ui.org/img/avatar1.20cfec72.jpg',
                        nickname: 'Hello'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .contact-page {

  }
</style>