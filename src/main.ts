import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import 'vant/lib/button/style';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Button from 'vant/lib/button';
Vue.use(Button);

import GlobalNav from '@/components/GlobalNav.vue';
Vue.component(GlobalNav.name, GlobalNav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
