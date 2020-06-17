<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音"/>
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword">
      <ul>
        <li
          :key="item.id"
          class="search-item border-bottom"
          v-for="item of list">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
          v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box // 因为要给字体留点间距所以设置了padding: 0 .1rem，需要保持总宽度不变使用border-box
      height: .62rem
      line-height: .62rem
      width: 100%
      text-align: center
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
  .search-content
    position: absolute
    overflow: hidden
    z-index: 1
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      background-color: #fff
      color:#666
      text-align:left
      padding-left: .2rem
</style>
