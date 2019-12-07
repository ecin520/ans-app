<template>
    <div class="questioner-page">

        <mu-button color="#ba68c8" large full-width style="text-align: center;font-size: 20px;margin-top: -5px;">
            <mu-icon value="face"></mu-icon>
            出题人排行榜
        </mu-button>

        <mu-list>
            <mu-list-item button v-for="(item, index) in user">
                <h3>{{index+1}}&nbsp;</h3>
                <mu-list-item-action>
                    <mu-avatar size="38">
                        <img :src="item.avatar_url">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>{{item.nickname}}</mu-list-item-title>
                <mu-list-item-action>
                    <mu-row>
                        <mu-icon value="sort"></mu-icon>
                        {{item.question_num}}
                    </mu-row>
                </mu-list-item-action>
            </mu-list-item>
        </mu-list>

    </div>
</template>

<script>
    export default {
        name: "QuestionerPage",
        data() {
            return {
                user: [
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 153
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1573193343018.jpg',
                        question_num: 63
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'http://148.70.50.70/source/1569489728895.jpg',
                        question_num: 53
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 23
                    },
                    {
                        'nickname': '易小凡',
                        'avatar_url': 'https://muse-ui.org/img/uicon.ac3913bf.jpg',
                        question_num: 13
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>
