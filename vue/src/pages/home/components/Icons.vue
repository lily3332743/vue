<template>
    <div class="icons">
      <!-- 这个swiper是npm install vue-awesome-swiper 下载的 -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div
                  class="icon"
                  v-for="item of page"
                  :key="item.id">
                    <div class="icon-img">
                        <img :src='item.imgUrl' alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {

      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
    // 这段计算pages属性的函数的作用是生成一个二维数组，每8个icon放在一个数组之中，pages[][]第一维记录多少个swiper-slide，第二维计算每个swiper-slide有多少个icon
  }
}
</script>

// 此处的.wrapper
//    overflow: hidden
//    width: 100%
//    height: 0
//    padding-bottom: 24.5%
// 这么设置的原因是因为移动端在网速很慢的情况下会出现轮播图下方内容文字抖动的情况，也就是一开始位置不对然后加载好了位置又突然一下子就变了
// 所以设置padding-bottom为24.5%撑开div的高度，此处的百分比是相对于自身width为100%的大小而言的，这里的width大概是400多px，对应轮播图的高度100px

// .wrapper >>> .swiper-pagination-bullet-active
//      background-color: red !important
//  这一段表示进行样式穿透，不受scoped的限制，让这一段样式设置可以在全局生效
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'//style中要引入样式，不能直接使用import，要使用@import，其中路径中的@符号表示src目录，但是当在css中引用其他的css时如果要使用这个@符号必须前面加一个~号，这块的配置在build文件夹下的webpack.base.conf.js中可进行设置和扩展,此处修改完webpack.base.conf.js配置也可以写成@import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  //.icons >>> .swiper-container的代码为了解决当icon高度不足两行时点击空白区域依旧能实现轮播图拖动效果，设置默认撑大高度
  .icons >>> .swiper-container
    height: 0
    width: 100%
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float:  left
      width:  25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top:  0
        left: 0
        right:  0
        bottom: .44rem
        box-sizing: border-box
        padding:  .1rem
        img
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right:  0
        bottom: 0
        height: .44rem
        line-height:  .44rem
        color:  $darkTextColor
        // overflow: hidden
        // white-space: nowrap
        // 规定段落中的文本不进行换行
        // text-overflow: ellipsis
        // text-overflow 属性规定当文本溢出包含元素时发生的事情
        // ellipsis 显示省略符号来代表被修剪的文本。
        // 这三行代码的作用是，当icon的desc部分过长时直接在后面显示三个点...,由于这个功能很常见，所以把它封装到了~styles/mixins.styl
        ellipsis()
</style>
