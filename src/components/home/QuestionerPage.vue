<template>
    <div class="questioner-page">

        <mu-button :color="this.$store.state.themColor" large full-width style="text-align: center;font-size: 20px;margin-top: -5px;">
            <mu-icon value="face"></mu-icon>
            出题人排行榜
        </mu-button>

        <mu-list>
            <mu-list-item button v-for="(item, index) in user" @click="questionerClick(item)">
                <h3>{{index+1}}&nbsp;</h3>
                <mu-list-item-action>
                    <mu-avatar size="38">
                        <img :src="item.avatar_url">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>{{item.nickname}}</mu-list-item-title>
                <mu-list-item-action>
                    <mu-row>
                        <mu-icon value="sort"></mu-icon>
                        {{item.devote_num}}
                    </mu-row>
                </mu-list-item-action>
            </mu-list-item>
        </mu-list>

    </div>
</template>

<script>
    export default {
        name: "QuestionerPage",
        data() {
            return {
                user: []
            }
        },
        methods: {
            questionerClick(item) {
                this.$router.push({name: 'FriendCard', params: {friendId: item.id}});
            }
        },
        mounted() {

            this.$axios({
                url: '/api/client/user/listUsersByNorPer',
                method: 'get'
            }).then(response => {
                this.user = response.data.sort((x, y) => {
                    return y.devote_num - x.devote_num;
                });
            });

        }
    }
</script>

<style scoped>

</style>
