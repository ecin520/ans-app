<template>
    <div class="contest-single-page">
        <div class="bg-color"></div>
        <div class="loadbar">
            <strong class="bar" :style="'height:'+progress+'%'"></strong>
        </div>
        <div class="right-loadbar">
            <strong class="right-bar" :style="'height:'+progress+'%'"></strong>
        </div>

        <div class="header-bar">
            <mu-row>
                <mu-col span="2">
                    <mu-avatar style="float: left">
                        <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg"/>
                    </mu-avatar>
                </mu-col>

                <mu-col span="8">
                    <div class="time-loadbar" style="margin-top: 13px">
                        <div class="time-bar" :style="'width:'+progress+'%'"></div>
                    </div>
                </mu-col>

                <mu-col span="2">
                    <mu-avatar style="float: right">
                        <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg"/>
                    </mu-avatar>
                </mu-col>
            </mu-row>
            <mu-row>
                123
            </mu-row>
        </div>

        <div class="content">
            <br><br><br>




        </div>
        <div class="items">
            <mu-flex justify-content="center">
                <h3 style="margin: 15px">世界上最小的国家是世界上最小的国家是世界上最小的国家是世界上最小的国家是</h3>
            </mu-flex><br><br><br>
            <mu-flex justify-content="center">
                <mu-button @click="itemA" :color="colorA" style="width: 80%;height: 60px;">美国</mu-button>
            </mu-flex>
            <br>
            <mu-flex justify-content="center">
                <mu-button @click="itemB" :color="colorB" style="width: 80%;height: 60px;">梵蒂冈</mu-button>
            </mu-flex>
            <br>
            <mu-flex justify-content="center">
                <mu-button @click="itemC" :color="colorC" style="width: 80%;height: 60px;">小日本</mu-button>
            </mu-flex>
            <br>
            <mu-flex justify-content="center">
                <mu-button @click="itemD" :color="colorD" style="width: 80%;height: 60px;">秘鲁</mu-button>
            </mu-flex>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ContestSinglePage",
        data() {
            return {
                progress: 0,
                time: 50,
                colorA: '',
                colorB: '',
                colorC: '',
                colorD: ''
            }
        },
        methods: {
            itemA() {
                this.colorA = '#66bb6a';
            },
            itemB() {
                this.colorB = 'error';
            },
            itemC() {
                this.colorC = '#fdd835';
            },
            itemD() {
                this.colorD = 'success';
            }
        },
        created() {
            this.timer = setInterval(() => {
                this.progress += 1;
                if (this.progress > 100) this.progress = 0;
            }, 150)
        },
        beforeDestroy() {
            if (this.timer) clearInterval(this.timer);
        }

    }
</script>

<style scoped lang="less">
    .contest-single-page {

        .bg-color {
            position: fixed;
            margin-top: -15px;
            width: 100%;
            height: 100%;
            background-color: #eeeeee;
            z-index: -999;
        }

        .header-bar {
            margin: 15px;
        }

        .loadbar {
            width: 10px;
            height: 350px;
            background-color: #8d8d8d;
            border: 1px solid #ccc;
            border-radius: 8px;
            position: absolute;
            bottom: 0;
        }

        .bar {
            width: 100%;
            display: block;
            font-size: 12px;
            border-radius: 8px;
            background-color: #82bb7d;
            color: #fff;
            position: absolute;
            bottom: 0;
        }

        .right-loadbar {
            width: 10px;
            height: 350px;
            background-color: #8d8d8d;
            border: 1px solid #ccc;
            border-radius: 8px;
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .right-bar {
            width: 100%;
            display: block;
            font-size: 12px;
            border-radius: 8px;
            background-color: #bb443e;
            color: #fff;
            position: absolute;
            bottom: 0;
        }

        .time-loadbar {
            width: 100%;
            height: 10px;
            background-color: #8d8d8d;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        .time-bar {
            height: 100%;
            border-radius: 8px;
            background-color: #6cbb73;
            color: #6cbb73;
        }

        .items {
            height: 100px;
            width: 100%;
            position: fixed;
            bottom: 370px;
        }
    }
</style>
