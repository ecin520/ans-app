// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import axios from 'axios'
import animate from 'animate.css'
import VueScroller from 'vue-scroller'
import cookies from 'vue-cookies' //导入
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'

import store from './store'

import common from './common'

Vue.use(cookies);
Vue.use(VueScroller);
Vue.use(animate);
Vue.use(Toast);
Vue.use(MuseUI);
Vue.use(common);
Vue.use(YDUI);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
