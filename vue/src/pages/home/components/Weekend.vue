<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    // text-indent表示段落第一行的缩进大小
  .item-img-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37.92%
    .item-img
      width: 100%
  .item-info
    text-align: left
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      // overflow: hidden
      // white-space: nowrap
      // 规定段落中的文本不进行换行
      // text-overflow: ellipsis
      // text-overflow 属性规定当文本溢出包含元素时发生的事情
      // ellipsis 显示省略符号来代表被修剪的文本。
      // 这三行代码的作用是，当icon的desc部分过长时直接在后面显示三个点...,由于这个功能很常见，所以把它封装到了~styles/mixins.styl
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
