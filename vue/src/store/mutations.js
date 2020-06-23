export default {
  changeCity (state, city) {
    state.city = city
    // Actions调用mutations才能去重新渲染state里的东西
    try {
      localStorage.city = city // 避免用户处于隐身模式或者关闭本地存储权限导致崩溃
    } catch (e) {}
  }
}
