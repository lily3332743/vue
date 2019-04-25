// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// border.css是为了解决在pc端中的1px在移动端显示变成两倍或者三倍的问题，保证1px的border在移动端中也是1px，而不是2px或3px

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App: App },
  // 局部组件的使用
  template: '<App/>'
})

// 路由就是根据网址url的不同，返回不同的内容给用户
