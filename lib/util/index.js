// 空对象和数组
export const emptyObj = Object.create(null)
export const emptyArray = []

// 是否定义
export function isDef(v) {
  return v !== undefined && v !== null
}

// 从数组删除项
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 防抖
export function debounce(fn, delay = 200) {
  let timeout = null
  return function() {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(context, args)
    }, delay)
  }
}

// 提取计算属性
export function mapGetters(prop, keys) {
  const map = {}

  keys.forEach(key => {
    map[key] = function() {
      return this[prop][key]
    }
  })

  return map
}
