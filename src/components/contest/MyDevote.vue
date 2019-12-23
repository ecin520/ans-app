<template>
    <div class="my-devote">
        <mu-appbar style="width: 100%;position: fixed;top: 0;" :color="this.$store.state.themColor">
            <mu-button style="margin-top: 12px;margin-left: -9px;" @click="backHome" icon color="success">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
        </mu-appbar>

        <scroller>
            <br><br><br><br>
            <mu-container>
                <div v-for="(item, index) in question" :key="index">
                    <mu-card>
                        <mu-card-title :title="item.type_name" :sub-title="item.question_describe"></mu-card-title>
                        <div style="padding: 12px;background: #f0f9eb;margin: 12px">
                            <p style="color: #4cafa7;font-size: 1.3em;">A {{item.item_a}}</p>
                            <p style="color: #4cafa7;font-size: 1.3em;">B {{item.item_b}}</p>
                            <p style="color: #4cafa7;font-size: 1.3em;">C {{item.item_c}}</p>
                            <p style="color: #4cafa7;font-size: 1.3em;">D {{item.item_d}}</p>
                        </div>
                        <p style="margin: 12px;font-size: 1.5em;color: #6cbb73">正确选项：{{item.item_ans}}</p>
                        <mu-expansion-panel style="margin: 8px">
                            <div style="margin: 12px;font-size: 1.3em;color: #bb7259;margin-left: -18px" slot="header">
                                解析
                            </div>
                            <p style="margin: 12px;font-size: 1.2em;color: #6cbb73">
                                {{item.question_explain}}</p>
                        </mu-expansion-panel>
                        <a style="margin: 12px;font-size: 1.5em;color: #bb4749;text-align: center">
                            审核状态：{{item.question_status === 1 ? '通过' : '不通过'}}
                        </a>
                        <br><br>
                    </mu-card>
                    <br><br>
                </div>


            </mu-container>
        </scroller>

    </div>
</template>

<script>
    export default {
        name: "MyDevote",
        data() {
            return {
                question: [
                    {
                        'id': '',
                        'type_name': '',
                        'question_owner': '',
                        'question_describe': '',
                        'question_explain': '',
                        'item_a': '',
                        'item_b': '',
                        'item_c': '',
                        'item_d': '',
                        'item_ans': '',
                        'question_status': ''
                    }
                ],
            }
        },
        methods: {
            backHome() {
                this.$router.go(-1);
            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/question/listQuestionByOwnerId',
                method: 'post',
                params: {
                    'owner': this.$cookies.get('userId')
                }
            }).then(response => {
                this.question = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>
