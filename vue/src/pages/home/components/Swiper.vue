<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
          <!-- v-if设置为list.length解决轮播图首次出现的图片不是第一张而是最后一张的问题，当list.length为初始默认值的空数组的时候不进行渲染swiper，等到home组件传来list值后在进行渲染 -->
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <div class="swiper-img">
                    <img :src="item.imgUrl" alt="">
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 2000,
        centeredSlides: true,
        loop: true
        // 这里设置loop为true表示开头的轮播图向左滑是最后一张，最后的轮播图向右滑是第一张，即无缝衔接开头结尾
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
      // 由showSwiper控制是否渲染轮播图，且将其设置为计算属性是为了避免template代码中混杂判断逻辑代码
    }
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
// margin、padding设置为百分比，是相对父元素宽来说的 , height设置百分比是相对父元素高来说的

// .wrapper >>> .swiper-pagination-bullet-active
//      background-color: red !important
//  这一段表示进行样式穿透，不受scoped的限制，让这一段样式设置可以在全局生效
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background-color: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.1%
    background-color: #eeeeee
    .swiper-img
      width: 100%
      img
        width: 100%
</style>
