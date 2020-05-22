import Vue, { VueConstructor } from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { VueRouter } from 'vue-router/types/router';

Vue.config.productionTip = false;

export type CreateAppResult = {
    app: ThisTypedComponentOptionsWithRecordProps<Vue, object, object, object, never>;
}

export type CreateAppContext = {
    rootComponent: VueConstructor;
    createRouter: () => { router: VueRouter };
}

export default (context: CreateAppContext): CreateAppResult => {
  const { router } = context.createRouter();
  const app: ThisTypedComponentOptionsWithRecordProps<Vue, object, object, object, never> = new Vue({
    router,
    render: (h) => h(context.rootComponent),
  }).$mount('#app');
  return { app };
};
