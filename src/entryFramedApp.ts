import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import createApp from '@/createApp';
import FramedAppHome from '@/views/FramedAppHome.vue';
import FramedApp from './FramedApp.vue';

const createRouter = (): { router: VueRouter } => {
  Vue.use(VueRouter);
  const routes: Array<RouteConfig> = [
    {
      path: '/framed',
      name: 'FramedAppHome',
      component: FramedAppHome,
    },
  ];
  const router = new VueRouter({
    mode: 'history',
    base: `${process.env.BASE_URL}/framed`,
    routes,
  });
  return { router };
};

createApp({
  rootComponent: FramedApp,
  createRouter,
});
