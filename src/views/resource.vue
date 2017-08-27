<template>
<div>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../../node_modules/vue-resource/dist/vue-resource.min.js">
    <link rel="stylesheet" href="../../node_modules/vue/dist/vue.min.js">
    <div id="app" class="container">
        <h1>vue-resource</h1>
        <a class="btn btn-primary" href="javascript:;" v-on:click="get">GET请求</a>
        <a class="btn btn-primary" href="javascript:;">post请求</a>
        <a class="btn btn-primary" href="javascript:;">jsonp请求</a>
    </div>
</div>
</template>
<script src="node_modules/vue/dist/vue.min.js"></script>
<script src="node_modules/vue-resource/dist/vue-resource.min.js"></script>

<script>
new Vue({
    el: "#app",
    data: {
        msg:''
    },
    methods:{
        get: function() {
            this.$http.get('package.json',{
                params:{myid:'666'},
                headers:{token:'abbbb'}
            }).then(res=>{
                this.msg=res.data;
            })
        }
    }

})
</script>



<script>
export default {
  data(){
      return{
          msg:"hei!"
      }
  }
}
</script>

