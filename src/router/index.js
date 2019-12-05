import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/basic/Login";
import Register from "../components/basic/Register";

import Home from "../components/Home";
import HomePage from "../components/home/HomePage";
import ChatPage from "../components/chat/ChatPage";


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
        }
    ]
})
