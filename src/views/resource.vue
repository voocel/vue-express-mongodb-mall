<template>
<div>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <div id="app" class="container">
        <h1>vue-resource</h1>
        <a class="btn btn-primary" href="javascript:;">GET请求</a>
        <a class="btn btn-primary" href="javascript:;">post请求</a>
        <a class="btn btn-primary" href="javascript:;">jsonp请求</a>
    </div>
</div>
</template>
<script src="node_modules/vue/dist/vue.min.js"></script>
<script src="node_modules/vue-resource/dist/vue-resource.min.js"></script>
<script>
export default {
  data(){
      return{
          msg:"hei!"
      }
  }
}
</script>

