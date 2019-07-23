import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


//----vuex----//


import Vuex from 'vuex'
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        totalNum: 0
    },
    getters:{
        getTotalNum:function (state) {
            return function () {
                return state.totalNum;
            }
        }
    },
    mutations: {
        addTotal (state) {
            state.totalNum++;
        },
        minusTotal (state) {
            state.totalNum--;
        }
    }
});


//----vuex----//




new Vue({
    store,
  render: h => h(App)
}).$mount('#app');