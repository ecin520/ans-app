<template>
    <div class="type">
        <mu-card-media style="margin-top: -1px;" title="新主题来袭" sub-title="全新类型-全能百科，成为一个全能小王子。">
            <img style="" @click="picClick" src="@/assets/dog.gif">
        </mu-card-media>


        <div class="recent">
            <mu-row>
                <mu-col span="4">
                    <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;" color="#fbc02d">
                        最近在玩
                    </mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button @click="startDialogClick" color="#40c4ff"
                               style="width: 90%;margin: 5px;font-size: smaller;">全能打百科
                    </mu-button>
                    <br>
                    <mu-button color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    <br>
                    <mu-button color="#40c4ff" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
            </mu-row>
        </div>

        <div class="hot">
            <mu-row>
                <mu-col span="4">
                    <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: smaller;"
                               color="#ff71bf">
                        热门推荐
                    </mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    <br>
                    <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    <br>
                    <mu-button color="success" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
            </mu-row>
        </div>
        <div class="update">
            <mu-row>
                <mu-col span="4">
                    <mu-button style="width: 95%;height: 82px;color: #fff6fc;margin: 5px;font-size: smaller;"
                               color="#9c27b0">

                        最近更新
                    </mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    <br>
                    <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
                <mu-col span="4">
                    <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                    <br>
                    <mu-button color="#ef5350" style="width: 90%;margin: 5px;font-size: smaller;">全能百科</mu-button>
                </mu-col>
            </mu-row>
        </div>

        <h2>&nbsp;所有分类 (15)</h2>
        <h3>&nbsp;综合</h3>
        <mu-row style="margin: 5px">
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
        </mu-row>
        <mu-row style="margin: 5px">
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa2bf">Secondary</mu-button>
            </mu-col>
        </mu-row>

        <h3>&nbsp;教育</h3>
        <mu-row style="margin: 5px">
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
        </mu-row>
        <mu-row style="margin: 5px">
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
            <mu-col span="4">
                <mu-button style="width: 90%;margin: 5px" color="#ffa000">Secondary</mu-button>
            </mu-col>
        </mu-row>



    </div>
</template>

<script>
    export default {
        name: "TypePage",
        data() {
            return {
            }
        },
        methods: {
            contestIn() {

            },
            startDialogClick() {
                this.$router.push({name: 'TypeIntroduce'});
            }
        }
    }
</script>

<style scoped>

</style>
