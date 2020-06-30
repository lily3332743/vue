<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      <!-- router-link渲染过程当中都是直接替换为a标签，但是a标签有默认的样式，因此直接使用router-link的tag将其替换为li标签，就可以摆脱a标签的默认样式 -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    // text-indent表示段落第一行的缩进大小
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      min-width: 0
      // 只有设置了固定宽度的元素，才有可能会让ellipsis()生效
      flex: 1
      padding: .1rem
      text-align: left
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
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
