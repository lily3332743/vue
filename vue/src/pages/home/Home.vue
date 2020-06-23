<template>
    <div>
        <home-header></home-header>
        <!-- 父子组件之间的city传值 -->
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // 利用父子组件传值把index.json里的静态配置信息通过Ajax方法传递值过去
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    // 借助mounted函数来发送Ajax请求，因为home是主要的组件，所以适合进行全局操作，而不是在每个子组件里面都去做Ajax请求
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      // 只有放在static文件夹下面的文件才是可以直接通过url跳转访问到的，其他都是不可访问的数据
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
      // 通过config下面的index.js的proxyTable可以设置api的路径，重定向至某个路径，这样子不需要多次修改，上线后更改数据位置时只需要修改index.js即可，此功能由webpack-dev-server提供
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style>

</style>
