<template>
  <ul class="list">
    <li class="item" v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick">
    {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      // 记录touch的状态
      startY: 0,
      timer: null
      // timer用于节流限制
    }
  },
  updated () {
    // 为什么要在updated函数当中来执行，是因为页面刚加载时cities数据为空数组，当Ajax获取数据之后重新渲染数据就会被触发
    this.startY = this.$refs['A'][0].offsetTop // A到顶部的垂直距离
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          // 节流限制，避免计算频率过高
          clearTimeout(this.timer)
          // 延时16ms，假设你在16ms之内又执行了一次操作，那么会将旧操作clear掉然后重新执行延时16ms的操作
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
          // 在这里计算startY会让性能低下，将startY的计算归入到updated事件钩子
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)// 延时16ms，假设你在16ms之内又执行了一次操作，那么会将旧操作clear掉然后重新执行延时16ms的操作
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      color: $bgColor
</style>
