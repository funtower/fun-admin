import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/Index'
import HomeCart from '@/components/home/HomeCart'
import Community from '@/components/community/Community'
import Topic from '@/components/community/Topic'
import Article from '@/components/community/Article'
import Blog from '@/components/blog/Blog'
import NotFound from '@/components/common/NotFound404'
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
          redirect: '/Index/Community/Topic',
          component: Community,
          children: [
            {
              path: '/Index/Community/Topic',
              name: 'Topic',
              component: Topic
            },
            {
              path: '/Index/Community/Article',
              name: 'Article',
              component: Article
            }
          ]
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
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound404',
      component: NotFound
    }

  ]
})
