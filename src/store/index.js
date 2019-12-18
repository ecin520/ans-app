import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userId: '',
        themColor: '#453b48'
    }
});
export default store;
