<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
          v-for="item of hot"
          :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities"
      :key="key"
      :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper)
      console.log(this.scroll)
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

// .border-topbottom
//   控制1像素边框颜色
//     &:before
//       border-color: #ccc
//     &:after
//       border-color: #ccc

//  .button-list
//    overflow: hidden(形成BFC)
//    padding: .1rem .6rem .1rem .1rem（右边预留控件给ABC首字母做控件）
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
      // 顶部底部分别有一像素边框
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    //height: 100% //解决wrapper高度导致BSscroll失效的问题，wrapper必须固定高度且小于content高度
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden //为了形成BFC
      padding: .1rem .6rem .1rem .1rem //右边预留控件给ABC首字母做控件
      .button-wrapper
        float: left
        width: 33.33%
        // 外面不包裹wrapper的话就是会另外算margin，导致一行只能放置两个按钮，所以必须给wrapper先设置宽度为1/3
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        text-align: left
</style>
