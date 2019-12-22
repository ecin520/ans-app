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
                    component: HomePage
                },
                {
                    path: '/ChatPage',
                    name: 'ChatPage',
                    component: ChatPage
                },
                {
                    path: '/ContestPage',
                    name: 'ContestPage',
                    component: ContestPage
                },
                {
                    path: '/SettingPage',
                    name: 'SettingPage',
                    component: SettingPage
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
            }
        }
    ]
});
export default router;


