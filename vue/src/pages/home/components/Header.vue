<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <!-- 使用router-link进行路由跳转，当点击此片区域时会定位到/city -->
        <router-link to='/city'>
          <div class="header-right">
            <!-- {{this.$store.state.city}} -->
            <!-- 对应刚刚创建的vuex的store里的state -->
            {{ this.doubleCity }}
            <span class="iconfont arrow-icon">&#xe615;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // mapState是state的语法糖,当一个组件需要获取多个状态时候，将这些状态都声明为computed属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
    // mapState就是把city给映射进computed里去,同名映射
    // mapGetters也跟mapState的原理是一样的
  }
}
</script>
// scoped表示该部分样式只对这个组件生效，不影响到其他的组件的样式设计
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';//style中要引入样式，不能直接使用import，要使用@import，其中路径中的@符号表示src目录，但是当在css中引用其他的css时如果要使用这个@符号必须前面加一个~号，这块的配置在build文件夹下的webpack.base.conf.js中可进行设置和扩展,此处修改完webpack.base.conf.js配置也可以写成@import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor //此处直接使用varibles.styl中定义的全局变量，即背景色
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background-color: #ffffff
      border-radius: .1rem
      color: #ccc
    .header-right
      color: #fff
      min-width: 1.04rem // 不把width定死，只写min-width，因为有些城市四个字可能会不够装
      padding: 0 .1rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
