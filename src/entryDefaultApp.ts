import createApp from '@/createApp';
import router from './router';
import App from './App.vue';

createApp({
  rootComponent: App,
  createRouter: () => ({ router }),
});
