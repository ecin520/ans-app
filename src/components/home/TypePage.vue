<template>
    <div class="type">
        <mu-card-media style="margin-top: 0px;" title="新主题来袭" sub-title="全新类型-全能百科，成为一个全能小王子。">
            <img @click="picClick" style="width: 100%;" src="@/assets/news1.gif">
        </mu-card-media>


        <div class="recent">
            <mu-row>
                <mu-col span="4">
                    <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: 1.3em;font-family: 'Virdwa Mono'" color="#fbc02d">
                        最近在玩
                    </mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="typeClick('全能百科')" color="#40c4ff"
                               style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">全能百科
                    </mu-button>
                    <br>
                    <mu-button @click="typeClick('经典文学')" color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">经典文学</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="typeClick('脑经急转弯')" color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">脑经急转弯</mu-button>
                    <br>
<!--                    <mu-button color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>-->
                </mu-col>
            </mu-row>
        </div>

        <div class="hot">
            <mu-row>
                <mu-col span="4">
                    <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono';font-size: 1.3em;"
                               color="#ef5350">
                        热门推荐
                    </mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="typeClick('全能百科')" color="#ff8a65"
                               style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">全能百科
                    </mu-button>
                    <br>
                    <mu-button @click="typeClick('经典文学')" color="#ff8a65" style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">经典文学</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="typeClick('脑经急转弯')" color="#ff8a65" style="width: 90%;margin: 5px;font-size: smaller;font-family: 'Virdwa Mono'">脑经急转弯</mu-button>
                    <br>
                    <!--                    <mu-button color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>-->
                </mu-col>
            </mu-row>
        </div>

        <div class="all-type"><br>
            <p style="font-size: 1.5em;">&nbsp;&nbsp;所有分类 ({{typeData.length}})</p>
            <mu-row style="margin: 5px">
                <mu-col span="4" v-for="(item, index) in typeData" :key="index">
                    <mu-button
                        @click="typeClick(item.type_name)"
                        style="width: 90%;margin: 5px;font-size: smaller;height: 45px;font-family: 'Virdwa Mono'"
                        color="#d1c4e9">{{item.type_name}}</mu-button>
                </mu-col>
            </mu-row>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                typeData: [
                    {
                        type_name: ''
                    }
                ]
            }
        },
        methods: {
            contestIn() {

            },
            startDialogClick() {
                console.log(this.typeData);
                // this.$router.push({name: 'TypeIntroduce'});
            },
            picClick() {
                this.$router.push({name: 'NewsPage'});
            },
            typeClick(type_name) {
                this.$router.push({name: 'TypeIntroduce', params: {type_name: type_name}})
            }
        },
        created() {

            this.$axios({
                url: '/api/client/type/listAllType',
                method: 'get'
            }).then(response => {
                this.typeData = response.data;
            }).catch(error => {

            });
        }
    }
</script>

<style scoped>

</style>
