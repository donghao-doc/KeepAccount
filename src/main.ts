import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Vant UI
import 'vant/lib/button/style';
import { Button, Icon } from 'vant';
Vue.use(Button);
Vue.use(Icon)

// 全局组件
import GlobalNav from '@/components/GlobalNav.vue';
Vue.component(GlobalNav.name, GlobalNav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
