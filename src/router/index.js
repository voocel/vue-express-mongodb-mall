import Vue from 'vue'
import Router from 'vue-router'
import goodslist from '@/views/goodslist'
import Title from '@/views/title'
import Image from '@/views/image'
import Cart from '@/views/cart'

Vue.use(Router)

export default new Router({
  mode:'history',     //路由中将没有#号
//mode:'hash',     //路由中需要有#号
  routes: [
    {
      // path: '/goods/:goodsid/user/:user',
      path: '/goods',
      name: 'goodslists',
      component: goodslist,
      children: [
        {
          path: 'title',
          name: 'title',
        component:Title
        },
        {
          path: 'image',
          name: 'image',
        component:Image
      }  
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    }

  ]
})
