import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/basic/Login";
import Register from "../components/basic/Register";

import Home from "../components/Home";
import HomePage from "../components/home/HomePage";
import ContestPage from "../components/contest/ContestPage";
import ChatPage from "../components/chat/ChatPage";

import ChatPageSingle from "../components/single/ChatPageSingle";

import ContestSinglePage from "../components/single/ContestSinglePage";

import TypeIntroduce from "../components/single/TypeIntroduce";

import FriendCard from "../components/single/FriendCard";

import WaitingPage from "../components/single/WaitingPage";

import ContestResultPage from "../components/single/ContestResultPage";
import DevoteQuestion from "../components/single/DevoteQuestion";

import SettingPage from "../components/setting/SettingPage";

import NewsPage from "../components/single/NewsPage";

import MyDevote from "../components/contest/MyDevote";

import ContestRecord from "../components/contest/ContestRecord";

import Review from "../components/contest/Review";

import ModifyInfo from "../components/setting/ModifyInfo";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/HomePage',
                    name: 'HomePage',
                    component: HomePage,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/ChatPage',
                    name: 'ChatPage',
                    component: ChatPage,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/ContestPage',
                    name: 'ContestPage',
                    component: ContestPage,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/SettingPage',
                    name: 'SettingPage',
                    component: SettingPage,
                    meta: {
                        keepAlive: true
                    }
                }
            ],
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            }
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/ChatPageSingle',
            name: 'ChatPageSingle',
            component: ChatPageSingle,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/ContestSinglePage',
            name: 'ContestSinglePage',
            component: ContestSinglePage,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/TypeIntroduce',
            name: 'TypeIntroduce',
            component: TypeIntroduce,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/FriendCard',
            name: 'FriendCard',
            component: FriendCard,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/WaitingPage',
            name: 'WaitingPage',
            component: WaitingPage,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/ContestResultPage',
            name: 'ContestResultPage',
            component: ContestResultPage,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/DevoteQuestion',
            name: 'DevoteQuestion',
            component: DevoteQuestion,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewsPage',
            name: 'NewsPage',
            component: NewsPage,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/MyDevote',
            name: 'MyDevote',
            component: MyDevote,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/ContestRecord',
            name: 'ContestRecord',
            component: ContestRecord,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Review',
            name: 'Review',
            component: Review,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/ModifyInfo',
            name: 'ModifyInfo',
            component: ModifyInfo,
            beforeEnter: (to, from, next) => {
                let isLogin = router.app.$cookies.get('isLogin');
                if (isLogin === null) {
                    router.push('/Login');
                } else if( isLogin === 'ecin520') {
                    next();
                }
            },
            meta: {
                keepAlive: true
            }
        }
    ]
});
export default router;


