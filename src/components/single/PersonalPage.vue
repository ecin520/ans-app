<template>
    <div class="personal-page">

        <div class="avatar-background">
            <a style="color: white;font-size: 1.6em;">易小凡</a><br>
            <a style="color: white;font-size: 1em;">ID : 101245</a>
        </div>
        <div class="avatar">
            <mu-flex class="flex-wrapper" justify-content="center">
                <!--                <a style="color: white">nickname</a>-->
                <mu-avatar size="90">
                    <img src="https://muse-ui.org/img/avatar3.55182749.jpg"/>
                </mu-avatar>
                <!--                <a style="color: white">nickname</a>-->
            </mu-flex>
        </div>
        <br>
        <div class="content">
            <br><br>
            <a style="color: #2b2b2b;font-size: 1.1em;"><a style="color: #58b1ec">个人签名：</a>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。</a>
            <br> <br>
            <mu-chip style="float: left" color="#ff7043">
                Tel：15607942340
            </mu-chip>
            <mu-chip style="float: right" color="teal">
                擅长类型：全能百科
            </mu-chip>
            <br><br>
            <mu-chip style="float: left" color="#a1887f">
                爱好：篮球&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </mu-chip>
            <mu-chip style="float: right" color="#40c4ff">
                学校：江西师范大学
            </mu-chip>

            <br><br>
            <mu-flex justify-content="center">
                <div style="float: left">
                    <h4>正确率: 50%</h4>
                    <mu-circular-progress
                            class="demo-circular-progress"
                            mode="determinate"
                            :value="50"
                            color="success"
                            :stroke-width="7"
                            :size="76">
                    </mu-circular-progress>
                </div>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div style="float: right">
                    <h4>排名: 80%</h4>
                    <mu-circular-progress
                            class="demo-circular-progress"
                            mode="determinate"
                            :value="80"
                            color="red"
                            :stroke-width="7"
                            :size="76">
                    </mu-circular-progress>
                </div>
            </mu-flex>

        </div>


    </div>
</template>

<script>
    export default {
        name: "PersonalPage"
    }
</script>

<style scoped lang="less">
    .personal-page {

        .avatar-background {
            display: block;
            width: 100%;
            height: 18vh;
            background: #97c872;
            text-align: center;
            /*color: white;*/
            /*font-size: 3em;*/
        }

        .avatar {
            margin-top: -40px;
        }

        .content {
            /*background: #f8f7ff;*/
            width: 100%;
            /*height: 35vh;*/
            margin-top: -71px;
            padding: 10px;
        }
    }


</style>
