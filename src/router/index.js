// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  },
  pushWithAnchor: function (routeName, toHash) {
    const fromHash = Router.history.current.hash
    fromHash !== toHash || !fromHash
    ? Router.push({ name: routeName, hash: toHash })
    : Router.push({ name: routeName, hash: fromHash }, undefined, () => { window.location.href = toHash })
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'Imprint',
          name: 'Imprint',
          component: () => import('@/views/imprint/Index.vue'),
        },
        {
          path: 'Whitepaper',
          name: 'Whitepaper',
          component: () => import('@/views/whitepaper/Index.vue'),
          meta: { src: require('@/assets/whitepaper.jpg') },
        },
        {
          path: 'FAQ',
          name: 'FAQ',
          component: () => import('@/views/faq/Index.vue'),
          meta: { src: require('@/assets/faq.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
