import '@babel/polyfill';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import PrismicVue from 'prismic-vue';
// import linkResolver from './link-resolver';

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint
  // linkResolver
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
