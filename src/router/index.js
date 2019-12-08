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

Vue.use(Router);

export default new Router({
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
                }
            ]
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
            component: ChatPageSingle
        },
        {
            path: '/ContestSinglePage',
            name: 'ContestSinglePage',
            component: ContestSinglePage
        },
        {
            path: '/TypeIntroduce',
            name: 'TypeIntroduce',
            component: TypeIntroduce
        }

    ]
})
