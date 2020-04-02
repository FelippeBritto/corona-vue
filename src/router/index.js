import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '../views/Home.vue';
import Login from '../views/Login';
import NotFound from '../views/NotFound';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/404err'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404err',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;