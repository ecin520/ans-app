<template>
    <div class="devote-question">
        <div class="bg-color"></div>
        <mu-flex class="flex-demo" justify-content="left" fill>
            <mu-button @click="backHome" icon color="white">
                <mu-icon value="home"></mu-icon>
            </mu-button>
        </mu-flex>
        <br><br>

<!--        <mu-flex class="flex-demo" justify-content="center">-->
<!--            <mu-card style="width: 92%">-->
                <mu-row>
                    <mu-flex class="flex-demo" justify-content="start" >
                        <mu-button color="" @click="openSimpleDialog" flat>添加类型</mu-button>
                    </mu-flex>
                    <mu-flex class="flex-demo" justify-content="end" >
                        <p style="color: #7ed271;font-size: 1.5em;margin-top: 0px;">{{selectRadio}}</p>
                    </mu-flex>
                </mu-row><br>
                <mu-text-field label-float label="题目描述" style="" full-width v-model="question_describe"></mu-text-field>
                <mu-text-field :rows="2" multi-line label-float label="题目解释" style="" full-width v-model="question_describe"></mu-text-field>
                <mu-text-field placeholder="选项A" style="" full-width v-model="question_describe"></mu-text-field>
                <mu-text-field placeholder="选项B" style="" full-width v-model="question_describe"></mu-text-field>
                <mu-text-field placeholder="选项C" style="" full-width v-model="question_describe"></mu-text-field>
                <mu-text-field placeholder="选项D" style="" full-width v-model="question_describe"></mu-text-field>
<!--            </mu-card>-->
<!--        </mu-flex>-->



        <mu-dialog width="360" :open.sync="openSimple">
            <div class="select-control-group" >
<!--                Selects: {{selectRadio}}-->
                <div style="display: inline;margin: 5px;" v-for="(item, index) in classificationData">
                    <mu-radio :value="item.type_name" v-model="selectRadio" :label="item.type_name"></mu-radio>
                </div>
            </div>
<!--            <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>-->
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
                selectRadio: '',
                openSimple: false,
                question_describe: ''
            }
        },
        methods: {
            backHome() {
                this.$router.go(-1);
            },
            openSimpleDialog () {
                this.openSimple = true;



            },
            closeSimpleDialog () {
                this.openSimple = false;
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
        /*background: #453b48;*/
    }
</style>
