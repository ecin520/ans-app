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
                        avatar_url: '',
                        nickname: ''
                    }
                ]
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
            });
        }
    }
</script>

<style scoped>
    .contact-page {

    }
</style>
