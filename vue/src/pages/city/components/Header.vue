<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

// 样式里面引入样式必须使用@import
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    overflow: hidden
    font-size: .32rem
    .header-back
      width: .64rem
      position: absolute
      text-align: center
      font-size: .4rem
      top: 0
      left: 0
      color: #fff
</style>
