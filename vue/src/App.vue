<template>
  <div id="app">
    <!-- keep-alive是vue自带的标签，意思是路由被加载了一次之后就把路由的内容放到内存之中，重新进入路由的时候不需要重新渲染组件，不需要重新执行钩子函数，只需要把以前的内容拿出来重新显示就好了 -->
    <keep-alive>
      <router-view/>
      <!-- router-view显示当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
