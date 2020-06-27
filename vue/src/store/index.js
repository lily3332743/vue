import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// 在vue里使用带有install函数的第三方插件都需要使用Vue.use()载入

export default new Vuex.Store({
  state: state,
  // 目的是为了对state和mutations部分进行拆分，避免结构过于复杂
  mutations: mutations,
  // actions: {
  //   changeCity (ctx, city) {
  //     // Actions调用mutations才能去重新渲染state里的东西，使用commit方法
  //     ctx.commit('changeCity', city)
  //   }
  // },
  getters: {
    doubleCity (state) {
      return state.city
    }
  }
  // getters类似于computed，可以避免数据冗余，也类似于我们重写的get方法
})
