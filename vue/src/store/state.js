let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
// 保留本地存储的默认值，并且优先从本地存储的数据去取，取不到才用上海
// 为了避免部分用户关闭本地存储权限而导致代码直接崩溃的现象，使用try catch包裹

export default {
  city: defaultCity
  // city: localStorage.city || '上海'
  // 保留本地存储的默认值，并且优先从本地存储的数据去取，取不到才用上海
}
