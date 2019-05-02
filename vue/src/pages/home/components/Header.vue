<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe615;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
// scoped表示该部分样式只对这个组件生效，不影响到其他的组件的样式设计
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';//style中要引入样式，不能直接使用import，要使用@import，其中路径中的@符号表示src目录，但是当在css中引用其他的css时如果要使用这个@符号必须前面加一个~号，这块的配置在build文件夹下的webpack.base.conf.js中可进行设置和扩展,此处修改完webpack.base.conf.js配置也可以写成@import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
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
      width: 1.4rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
