<template>
    <div class="icons">
        <swiper>
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
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
  .icons >>> .swiper-container
    height: 0
    width: 100%
    padding-bottom: 50%
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
      // text-overflow: ellipsis
      // 这三行代码的作用是，当icon的desc部分过长时直接在后面显示三个点...,由于这个功能很常见，所以把它封装到了~styles/mixins.styl
      ellipsis()
</style>
