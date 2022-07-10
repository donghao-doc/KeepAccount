import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import DetailView from '@/views/DetailView.vue';
import ChartView from '@/views/ChartView.vue';
import ManagerView from '@/views/ManagerView.vue'
import SettingView from '@/views/SettingView.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/detail'
  },
  {
    path: '/detail',
    name: 'DetailView',
    component: DetailView,
    meta: {title: '明细', position: 1, icon: 'balance-list'}
  },
  {
    path: '/chart',
    name: 'ChartView',
    component: ChartView,
    meta: {title: '报表', position: 2, icon: 'cluster'}
  },
  {
    path: '/manager',
    name: 'ManagerView',
    component: ManagerView,
    meta: {title: '资产', position: 3, icon: 'gold-coin'}
  },
  {
    path: '/setting',
    name: 'SettingView',
    component: SettingView,
    meta: {title: '设置', position: 4, icon: 'setting'}
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
