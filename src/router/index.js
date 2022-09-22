import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/worker/:id',
    name: 'worker',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/work/ini.vue')
    }
  },
  {
    path: '/identy/:id',
    name: 'ident',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/work/iden.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/about.vue')
    }
  },
  {
    path: '/ecosystem',
    name: 'ecosystem',
    component: function () {
      return import('../views/ecosystem.vue')
    }
  },
  {
    path: '/ico',
    name: 'ico',
    component: function () {
      return import('../views/ico.vue')
    }
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: function () {
      return import('../views/roadmap.vue')
    }
  },
  {
    path: '/team',
    name: 'team',
    component: function () {
      return import('../views/team.vue')
    }
  },
  {
    path: '/document',
    name: 'document',
    component: function () {
      return import('../views/document.vue')
    }
  },
  {
    path: '/comunity',
    name: 'comunity',
    component: function () {
      return import('../views/comunity.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
