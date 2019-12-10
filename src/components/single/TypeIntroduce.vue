<template>
    <div class="type-introduce">
<!--        <mu-appbar style="width: 100%;position: sticky;top: 0;" color="white">-->
<!--            <mu-button @click="back" style="float: left;margin-top: 1%;" icon color="#ba68c8">-->
<!--                <mu-icon value="arrow_back"></mu-icon>-->
<!--            </mu-button>-->
<!--            <a style="text-align: center">脑筋急转弯</a>-->
<!--        </mu-appbar>-->
        <mu-appbar style="width: 100%;" color="white">
            <mu-button icon slot="left" @click="back" color="#ba68c8">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
            <a style="color: #ba68c8">{{type.type_name}}</a>
        </mu-appbar>



        <mu-card style="width: 95%; max-width: 375px; margin: 20px auto;">
<!--            <mu-card-header>-->
<!--                <h1>脑筋急转弯</h1>-->
<!--            </mu-card-header>-->
            <mu-card-media>
                <img style="" src="@/assets/news1.gif">
            </mu-card-media>
<!--            <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>-->
            <mu-card-text>
                <p style="color: darkcyan">{{type.type_describe}}</p>

                <h2 style="color: #af5960">热度：{{type.hot}}</h2>
                <h2 style="color: #af5960">难度：{{type.difficulty}}</h2>
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
                type: {
                    id: '',
                    type_name: '',
                    type_describe: '',
                    hot: '',
                    difficulty: ''
                }
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            contestIn() {
                this.$router.push({name: 'ContestSinglePage'});
            }
        },
        mounted() {
           // this.$toast.success(this.$route.params.type_name);
            this.$axios({
                url: '/api/client/type/getTypeByTypeName',
                method: 'post',
                params: {
                    'typeName': this.$route.params.type_name
                }
            }).then(response => {
                this.type = response.data
            }).catch(error => {

            });

        }
    }
</script>

<style scoped>

</style>
