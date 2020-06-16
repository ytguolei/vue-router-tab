import { prunePath } from './route'

// 内置规则
const rules = {
  // 地址，params 不一致则独立缓存
  path: route => route.path,

  // 完整地址 (忽略 hash)，params 或 query 不一致则独立缓存
  fullpath: route => prunePath(route.fullPath)
}

// 解析路由 key
function parseRouteKey($route, route, key) {
  const defaultKey = route.path

  if (!key) return defaultKey

  if (typeof key === 'string') {
    // 规则
    const rule = rules[key.toLowerCase()]
    return rule ? rule($route) : key
  }

  if (typeof key === 'function') {
    return parseRouteKey($route, route, key($route))
  }

  return defaultKey
}

// 解析匹配的路径
function parsePath(path, params) {
  for (const key in params) {
    path = path.replace(':' + key, params[key])
  }

  return path
}

// 匹配路由数据
export default class RouteMatch {
  constructor(vm, $route) {
    this.vm = vm
    this.$route = $route
  }

  // 设置路由
  set $route($route) {
    if ($route && !$route.matched) {
      const { $router } = this.vm
      $route = $router.match($route, $router.currentRoute)
    }
    this._$route = $route
  }

  // 获取路由
  get $route() {
    return this._$route || this.vm.$route
  }

  // 页面路由索引
  get routeIndex() {
    return this.vm.routeIndex
  }

  // 下级路由
  get route() {
    return this.$route.matched[this.routeIndex]
  }

  // 根路径
  get basePath() {
    const baseRoute = this.$route.matched[this.routeIndex - 1]
    const { path } = baseRoute

    return path && parsePath(path, this.$route.params)
  }

  // 缓存路径，用于判断是否复用
  get alivePath() {
    const { $route } = this
    // 嵌套路由
    if (this.nest) {
      return parsePath(this.route.path, $route.params)
    }

    return prunePath($route.fullPath)
  }

  // 路由元
  get meta() {
    const { route } = this
    return (route && route.meta) || {}
  }

  // 是否嵌套路由
  get nest() {
    return this.$route.matched.length > this.routeIndex + 1
  }

  // 路由 key
  get key() {
    return parseRouteKey(this.$route, this.route, this.meta.key)
  }

  // 是否缓存
  get alive() {
    const { keepAlive } = this.meta
    return typeof keepAlive === 'boolean' ? keepAlive : this.vm.keepAlive
  }

  // 是否复用组件
  get reusable() {
    const { reuse } = this.meta
    return typeof reuse === 'boolean' ? reuse : this.vm.reuse
  }
}
