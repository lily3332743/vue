<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <!-- router-link渲染过程当中都是直接替换为a标签，但是a标签有默认的样式，因此直接使用router-link的tag将其替换为div标签，就可以摆脱a标签的默认样式 -->
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle">
      <!-- 绑定动态style -->
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
        // 实现效果，往上拖显示返回icon，往下拖显示顶部景点详情tab，本来showAbs是用来控制header-abs区域的，但是我发现不需要v-show为showAbs也可以实现效果
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)// 绑定scroll事件
    // 这个属于全局绑定事件，因为对象是全局对象window，因此这个事件不仅对这个组件生效，也会影响到其他的组件，对于全局注册的事件必须解绑
  },
  // 这个方法相当于mounted，但跟mounted不一样，每次页面一展示都会运行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  // deactivated就是当当前页面被其他页面替换的时候会生效，在此注销全局事件
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, 0.8)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    z-index: 2 // 权重比轮播组件小，比成人票等文字内容大，可以覆盖文字内容，这样就可以修复在上滑时fix组件盖不住字体内容的bug了
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .header-fixed-back
      width: .64rem
      position: absolute
      text-align: center
      font-size: .4rem
      top: 0
      left: 0
      color: #fff
</style>
