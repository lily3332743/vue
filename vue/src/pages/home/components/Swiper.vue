<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cc600c6cd929709fef82ff17e3f0c421.jpg'
      }]
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
// 所以设置padding-bottom为24.5%撑开div的高度，此处的百分比是相对于自身width的大小而言的，这里的width大概是400多px，对应轮播图的高度100px

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
    padding-bottom: 24.5%
    background-color: #eeeeee
    .swiper-img
      width: 100%
      img
        width: 100%
</style>
