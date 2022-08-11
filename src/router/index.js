import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js';
import axios from 'axios'
import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  scrollBehavior: () => ({y: 0}),
  routes,
  mode: "history",
  base: process.env.VUE_ROUTER_BASE
})

export default Router

Router.beforeEach((to, from, next) => {
  var api = process.env.API;
  if (to.path == "/" || to.path == "/signup" || to.path == "/forgot-password") {
    next()
  }
  else {
    if (store.state.session.is_logged_in) {
      next()
    } else {
      axios.get('/api/get_authenticated_user_information', {
        withCredentials: true
      }).then((response) => {
        if (response.data.ok) {
          store.dispatch('setLoginSession', response.data.user_data);
          if (response.data.is_logged_in)
            next();
          else {
            next('/');
          }
        }
        else {
          next('/');
        }
      }).catch((error) => {
        if (error.response.status === 401)
          return next('/');
        else
          return Promise.reject(error);
      })
    }
  }
})







