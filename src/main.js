import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'

Vue.config.productionTip = false;





new Vue({
    render: h => h(App),
    store:Store
}).$mount('#app');