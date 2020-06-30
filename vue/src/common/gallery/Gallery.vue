<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- v-if设置为list.length解决轮播图首次出现的图片不是第一张而是最后一张的问题，当list.length为初始默认值的空数组的时候不进行渲染swiper，等到home组件传来list值后在进行渲染 -->
          <!-- slides -->
          <swiper-slide
          v-for="(item, index) in imgs"
          :key="index">
            <img class="gallery-img" :src="item" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://source.qunarzz.com/site/images/wns/20171019_pc_464x320_7667.jpg', 'http://source.qunarzz.com/site/images/wns/20171019_pc_464x320_7667.jpg']
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 分页式，fraction表示下面显示1/2
        observer: true,
        observeParents: true
        // observer：当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启
        // observer和observeParents表示swiper插件只要监听到本元素或者是父级元素发生了dom结构的变化时候会进行自动的自我刷新，通过自我刷新解决swiper宽度计算的问题，从而解决fraction显示不正确的问题，因为在切换画廊显示与隐藏过程中容易出现计算错误影响显示效果的问题
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
      // 点击画廊之后关闭画廊
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  // 此处的所有父元素不能有overflow为hidden，否则将会影响分页fraction的展示效果，会被隐藏
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    z-index: 99
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      // 利用wrapper外部容器做占位符
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
        // 此处的所有父元素不能有overflow为hidden，否则将会影响分页fraction的展示效果，会被隐藏
</style>

// common文件夹用来存储全局公用组件，在webpack.base.conf.js中为它设置别名，修改后要重启服务器，webpack的修改需要重启服务器才会生效
