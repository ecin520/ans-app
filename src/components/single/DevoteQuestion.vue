<template>
    <div class="devote-question">
        <div class="bg-color"></div>

        <mu-appbar style="width: 100%;position: fixed;top: 0;" color="#26c6da">
            <mu-button style="margin-top: 12px;margin-left: -9px;" @click="backHome" icon color="success">
                <mu-icon value="home"></mu-icon>
            </mu-button>
            <span style="position: absolute; margin-top: 9px;">&nbsp;出题</span>
        </mu-appbar>
        <br><br><br><br>
        <mu-container>
            <mu-row>
                <mu-button
                        style="font-family: 'Microsoft JhengHei Light'"
                        color="info" @click="openSimpleDialog">
                    选择类型
                </mu-button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a style="color: #4caf50;font-size: 2em">{{question.type_name}}</a>
            </mu-row>
            <br>
            <yd-cell-group title="">
                <yd-cell-item>
                    <yd-textarea v-model="question.question_describe" placeholder="题目描述" slot="right" maxlength="100"></yd-textarea>
                </yd-cell-item>
            </yd-cell-group>
            <yd-cell-group title="">
                <yd-cell-item>
                    <yd-textarea v-model="question.question_explain" placeholder="题目解释" slot="right" maxlength="100"></yd-textarea>
                </yd-cell-item>
            </yd-cell-group>

            <yd-cell-group title="">
                <yd-cell-item>
                    <span slot="left">A&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <yd-input slot="right" v-model="question.item_a"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">B&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <yd-input slot="right" v-model="question.item_b"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">C&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <yd-input slot="right" v-model="question.item_c"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">D&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <yd-input slot="right" v-model="question.item_d"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <br>
            <div style="display: flex;justify-content: center">
                <mu-radio color="success" style="margin: 13px;" value="A" v-model="question.item_ans" label="A"></mu-radio>
                <mu-radio color="success" style="margin: 13px" value="B" v-model="question.item_ans" label="B"></mu-radio>
                <mu-radio color="success" style="margin: 13px" value="C" v-model="question.item_ans" label="C"></mu-radio>
                <mu-radio color="success" style="margin: 13px" value="D" v-model="question.item_ans" label="D"></mu-radio>
            </div>
            <br>
            <mu-button full-width color="primary" @click="submitQuestion">提交</mu-button>
            <br><br><br>
        </mu-container>


        <mu-dialog width="360" :open.sync="openSimple">
            <div class="select-control-group">
                <div style="display: inline;margin: 5px;" v-for="(item, index) in classificationData">
                    <mu-radio :value="item.type_name" v-model="question.type_name" :label="item.type_name"></mu-radio>
                </div>
            </div>
        </mu-dialog>

    </div>
</template>

<script>
    export default {
        name: "DevoteQuestion",
        data() {
            return {
                classificationData: [
                    {
                        id: '',
                        type_name: '',
                        type_describe: '',
                        hos: '',
                        difficulty: ''
                    }
                ],
                question:
                    {
                        'id': '',
                        'type_name': '全能百科',
                        'question_owner': '',
                        'question_describe': '',
                        'question_explain': '',
                        'item_a': '',
                        'item_b': '',
                        'item_c': '',
                        'item_d': '',
                        'item_ans': '',
                        'question_status': ''
                    },
                selectRadio: '',
                openSimple: false,
                question_describe: ''
            }
        },
        methods: {
            backHome() {
                this.$router.go(-1);
            },
            openSimpleDialog() {
                this.openSimple = true;


            },
            closeSimpleDialog() {
                this.openSimple = false;
            },
            submitQuestion() {

                this.$axios({
                    url: '/api/client/question/insertQuestion',
                    method: 'post',
                    data: {
                        'type_name': this.question.type_name,
                        'question_owner': this.$cookies.get('userId'),
                        'question_describe': this.question.question_describe,
                        'question_explain': this.question.question_explain,
                        'item_a': this.question.item_a,
                        'item_b': this.question.item_b,
                        'item_c': this.question.item_c,
                        'item_d': this.question.item_d,
                        'item_ans': this.question.item_ans
                    }
                }).then(response => {
                    console.log(response.data);
                    this.$toast.success('添加成功，等待审核');
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        mounted() {
            this.$axios({
                url: '/api/client/type/listAllType',
                method: 'get'
            }).then(response => {
                this.classificationData = response.data
            }).catch(error => {
                this.$message({
                    message: 'Error',
                    type: 'error'
                });
            });
        }
    }
</script>

<style scoped>
    .bg-color {
        position: fixed;
        z-index: -9999;
        top: 0;
        width: 100%;
        height: 100%;
        /*background: #a784aa;*/
        background: #f5f5f5;
    }
</style>
