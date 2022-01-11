import Vue from 'vue'
import router from '@/router'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

import {
    Menu,
    MenuItem,
    Row,
    Col
} from 'view-design';

Vue.component('iv-menu', Menu);
Vue.component('iv-menu-item', MenuItem);
Vue.component('iv-row', Row);
Vue.component('iv-col', Col);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
