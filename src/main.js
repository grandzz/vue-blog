import Vue from 'vue'
import router from '@/router'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

import {
    Menu,
    MenuItem,
    Card
} from 'view-design';

Vue.component('iv-menu', Menu);
Vue.component('iv-menu-item', MenuItem);
Vue.component('iv-card', Card);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
