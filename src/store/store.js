import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


const store = new Vuex.Store({
    state: {

        totalNum: 0,
        counterNum: 0

    },
    getters:{

        getTotalNum:function (state) {
            return state.totalNum;
        },

        getCounterNum: function (state) {
            return state.counterNum;
        }

    },
    mutations: {

        addTotal (state) {
            state.totalNum++;
        },
        minusTotal (state) {
            state.totalNum--;
        },
        clearTotal (state) {
            state.totalNum = 0;
        },

        setCounterNum (state,value){
            state.counterNum = value;
        }


    }
});


export default store;