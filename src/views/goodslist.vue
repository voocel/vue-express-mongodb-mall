<template>
  <div>
      这是我的测试!
      params：动态路由组件与组件间路由切换的参数传递
      query：页面切换传递参数
      <span>{{$route.params.goodsid}}</span>
      <span>{{$route.params.user}}</span>
      <router-link to='/goods/title'>点击标题</router-link>
      <router-link to='/goods/image'>点击图片</router-link><br>
      <router-view></router-view>

      <router-link to= '/cart'>点击跳转到购物车</router-link>
      <button @click="jump">按钮跳转购物车</button>

  </div>
</template>

<script>
export default {
  data(){
      return{
          msg:'heihei'
      }
  },
  methods:{
      jump:function(){
          this.$router.push('/cart?id=6')
          //this.$router.go(-1)  //倒退一步
      }
  }
}
</script>

