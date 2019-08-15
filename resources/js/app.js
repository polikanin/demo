import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import VueModalTor from "vue-modaltor";
import vSelect from 'vue-select';
import DateRangePicker from 'vue-mj-daterangepicker';
import 'vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css';
import 'v-msgx/dist/msg.min.css';
import Msg from 'v-msgx';
import NProgress from 'vue-nprogress';

Vue.config.productionTip = false;

Vue.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.component('date-pick', DatePick);
Vue.component('v-select', vSelect);
Vue.use(DateRangePicker);
Vue.use(VueAxios, axios);
Vue.use(VueModalTor);
Vue.use(Msg);
Vue.use(NProgress, {
    router: false
});

import VuePictureSwipe from 'vue-picture-swipe';
import AfHeader from './components/Header.vue';
import AfFooter from './components/Footer.vue';
import AfPopups from './components/Popups.vue';

Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.component('AfHeader', AfHeader);
Vue.component('AfFooter', AfFooter);
Vue.component('AfFooter', AfFooter);
Vue.component('AfPopups', AfPopups);

new Vue({
    router,
    store,
    // nprogress: new NProgress({ parent: '#app' }),

    render: h => h(App)
}).$mount('#app');
