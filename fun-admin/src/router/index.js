import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/Index'
import HomeCart from '@/components/common/HomeCart'
import Community from '@/components/common/Community'
import Blog from '@/components/common/Blog'
import Test from '@/components/common/Test'
import Sub from '@/components/common/Sub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/Index/HomeCart',
          name: 'HomeCart',
          component: HomeCart
        },
        {
          path: '/Index/Blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: '/Index/Community',
          name: 'Community',
          component: Community
        },
        {
          path: '/Index/Test',
          name: 'Test',
          component: Test,
          children: [
          {
            path: '/Index/Test/Sub',
            name: 'Sub',
            component: Sub
          }
          ]
        }
      ]
    }
  ]
})
