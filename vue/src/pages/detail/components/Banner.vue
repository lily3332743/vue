<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"/>
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63d;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery
    :imgs="imgs"
    v-show="showGallery"
    @close="handleGalleryClose"></common-gallery>
    <!-- 轮播图组件 -->
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
      // 当画廊再次被点击时让画廊隐藏
    }
  },
  data () {
    return {
      showGallery: false,
      imgs: ['http://source.qunarzz.com/site/images/wns/20171019_pc_464x320_7667.jpg', 'http://source.qunarzz.com/site/images/wns/20171019_pc_464x320_7667.jpg']
    }
  }
}
</script>

// overflow: hidden
// height: 0
// padding-bottom: 55%
// 防止页面抖动

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 32%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      display: flex
      color: #fff
      text-align: left
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      // 此处作用使得我们的info背景色出现透明渐变
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
