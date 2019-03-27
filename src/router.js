import Vue from 'vue';
import Router from 'vue-router';
const UserView = () => import('@/views/UserView');
const ExtendView = () => import('@/views/ExtendView');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/github-user-search',
      name: 'Github User Search',
      component: UserView
    },
    {
      path: '/extended-component-demo',
      name: 'Extended Component Demo',
      component: ExtendView
    }
  ]
});
