<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">输入城市/景点/游玩主题</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
// scoped表示该部分样式只对这个组件生效，不影响到其他的组件的样式设计
<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background-color: #00bcd4
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
      width: 1.24rem
      float: right
      text-align: center
</style>
