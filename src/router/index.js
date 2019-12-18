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
        },
        {
            path: '/FriendCard',
            name: 'FriendCard',
            component: FriendCard
        },
        {
            path: '/WaitingPage',
            name: 'WaitingPage',
            component: WaitingPage
        },
        {
            path: '/ContestResultPage',
            name: 'ContestResultPage',
            component: ContestResultPage
        },
        {
            path: '/DevoteQuestion',
            name: 'DevoteQuestion',
            component: DevoteQuestion
        }
    ]
})
