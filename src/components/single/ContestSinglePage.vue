<template>
    <div class="contest-single-page">
        <div class="loadbar">
            <strong class="bar" :style="'height:'+progress+'%'"></strong>
        </div>
        <div class="right-loadbar">
            <strong class="right-bar" :style="'height:'+progress+'%'"></strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContestSinglePage",
        data() {
            return {
                progress: 0
            }
        },
        created () {
            this.timer = setInterval(() => {
                this.progress += 1;
                if (this.progress > 100) this.progress = 0;
            }, 10)
        },
        beforeDestroy () {
            if (this.timer) clearInterval(this.timer);
        }

    }
</script>

<style scoped lang="less">
    .contest-single-page {
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
            font-family: arial;
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
            font-family: arial;
            font-size: 12px;
            border-radius: 8px;
            background-color: #bb443e;
            color: #fff;
            position: absolute;
            bottom: 0;
        }
    }
</style>
