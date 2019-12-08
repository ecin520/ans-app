<template>
    <div class="type-introduce">
        <mu-appbar style="width: 100%;position: sticky;top: 0;" color="white">
            <mu-button @click="back" style="float: left" icon color="#ba68c8">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
        </mu-appbar>




        <mu-card style="width: 95%; max-width: 375px; margin: 20px auto;">
            <mu-card-header>
                <h1>脑筋急转弯</h1>
            </mu-card-header>
            <mu-card-media>
                <img src="https://muse-ui.org/img/sun.a646a52d.jpg">
            </mu-card-media>
<!--            <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>-->
            <mu-card-text>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                <h2 style="color: #af1619">热度：999</h2>
                <h2 style="color: #af1619">难度：888</h2>
            </mu-card-text>
            <mu-flex justify-content="end">
                <mu-card-actions>
                    <mu-button @click="contestIn" color="success" flat>开始答题</mu-button>
                </mu-card-actions>
            </mu-flex>

        </mu-card>
    </div>
</template>

<script>
    export default {
        name: "TypeIntroduce",
        data() {
            return {
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            contestIn() {
                this.$router.push({name: 'ContestSinglePage'});
            }
        }
    }
</script>

<style scoped>

</style>
