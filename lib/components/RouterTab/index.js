// 方法
import { emptyObj } from '../../util'
import { prunePath } from '../../util/route'

// 功能模块混入
import contextmenu from './contextmenu'
import i18n from './i18n'
import iframe from './iframe'
import operate from './operate'
import pageLeave from './pageLeave'
import scroll from './scroll'
import restore from './restore'

// 子组件
import RouterAlive from '../RouterAlive.vue'
import TabItem from './TabItem.vue'

// RouterTab 组件
const RouterTab = {
  name: 'RouterTab',
  mixins: [contextmenu, i18n, iframe, operate, pageLeave, scroll, restore],
  components: { RouterAlive, TabItem },

  // 注入子组件
  provide() {
    return { Tab: this }
  },

  props: {
    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },

    // 页面刷新后是否恢复页签
    restore: {
      type: [Boolean, String],
      default: false
    },

    // 是否监听 restoreKey 变化自动还原页签
    restoreWatch: {
      type: Boolean,
      default: false
    },

    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },

    // 默认页面
    defaultPage: [String, Object],

    /**
     * 组件语言
     * - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
     * - 为对象时，可设置自定义的语言
     */
    language: {
      type: [String, Object],
      default: 'zh-CN'
    },

    // 页签国际化配置 i18n (key, [args])
    i18n: Function,

    // 最大缓存数，0 则不限制
    maxAlive: {
      type: Number,
      default: 0
    },

    // 是否复用路由组件
    reuse: {
      type: Boolean,
      default: false
    },

    // 页签过渡效果
    tabTransition: {
      type: [String, Object],
      default: 'router-tab-zoom'
    },

    // 页面过渡效果
    pageTransition: {
      type: [String, Object],
      default: () => ({
        name: 'router-tab-swap',
        mode: 'out-in'
      })
    }
  },

  data() {
    return {
      loading: false, // 路由页面 loading
      items: [], // 页签项
      aliveReady: false, // RouterAlive 初始化
      isMobile: false // 是否移动端
    }
  },

  computed: {
    // 默认路径
    defaultPath() {
      return this.defaultPage || this.basePath || '/'
    },

    // routerAlive
    $alive() {
      return this.aliveReady ? this.$refs.routerAlive : null
    },

    // 当前激活的页签 id
    activeTabId() {
      return this.$alive ? this.$alive.key : null
    },

    // 根路径
    basePath() {
      return this.$alive ? this.$alive.basePath : '/'
    },

    // 当前激活的页签
    activeTab() {
      return this.items.find(item => item.id === this.activeTabId)
    }
  },

  watch: {
    // 路由切换更新激活的页签
    $route($route) {
      this.loading = false
    }
  },

  created() {
    // 添加到原型链
    RouterTab.Vue.prototype.$routerTab = this
  },

  mounted() {
    // 是否移动端
    this.isMobile = /mobile/i.test(navigator.userAgent)
  },

  destroyed() {
    const proto = RouterTab.Vue.prototype
    // 取消原型挂载
    if (proto.$routerTab === this) {
      proto.$routerTab = null
    }
  },

  methods: {
    // RouterAlive 组件就绪
    onAliveReady($alive) {
      // 获取 keepAlive 组件实例
      this.$refs.routerAlive = $alive
      this.aliveReady = true
      this.initTabs()
    },

    // 初始页签数据
    initTabs() {
      if (this.restoreTabs()) return

      this.presetTabs()
    },

    // 预设页签
    presetTabs(tabs = this.tabs) {
      let ids = {}

      this.items = tabs
        .map(item => {
          item = typeof item === 'string' ? { to: item } : item || emptyObj

          const matched = item.to && this.matchRoute(item.to)

          if (matched) {
            const tab = this.getRouteTab(matched)
            const id = tab.id

            // 根据 id 去重
            if (!ids[id]) {
              // id 不允许更改
              delete item.id

              // 初始 tab 数据
              return (ids[id] = Object.assign(tab, item))
            }
          }
        })
        .filter(item => !!item)
    },

    // RouterAlive 缓存更新时同步更改页签
    onAliveChange(type, matched) {
      const { items } = this
      const matchIdx = items.findIndex(({ id }) => id === matched.key)
      const item = this.getRouteTab(matched)

      // 页签已存在
      if (matchIdx > -1) {
        if (type === 'create') {
          // 替换原页签
          this.$set(items, matchIdx, item)
        } else if (type === 'update') {
          // 地址更改则替换页签
          if (items[matchIdx].to !== matched.$route.fullPath) {
            this.$set(items, matchIdx, item)
          }
        }
      } else {
        // 新增页签
        items.push(item)
      }
    },

    // 从 route 中获取 tab 配置
    getRouteTab({ key, $route, meta }) {
      const tab = { ...meta }

      // 支持根据路由函数返回的页签属性
      const props = ['title', 'tips', 'icon', 'closable']

      for (let i in tab) {
        if (props.includes(i)) {
          const val = tab[i]
          if (typeof val === 'function') {
            tab[i] = val($route)
          }
        }
      }

      return Object.assign(tab, {
        id: key,
        to: $route.fullPath
      })
    },

    // 解析过渡配置
    getTransOpt(trans) {
      return typeof trans === 'string' ? { name: trans } : trans
    },

    // 重载路由视图
    async reload() {
      this.$alive.reload()
    },

    // 匹配路由信息
    matchRoute($route) {
      return this.$alive.matchRoute($route)
    },

    // 获取路由缓存 key
    getRouteKey(route = this.$route) {
      return this.matchRoute(route).key
    },

    // 从路由地址匹配页签 id
    getIdByPath(path, match = true) {
      if (!path) return

      const matched = this.matchRoute(path)
      const { key } = matched

      if (match) {
        // 路由地址精确匹配页签
        const matchTab = this.items.find(
          ({ to }) => prunePath(to) === prunePath(matched.$route.fullPath)
        )

        if (matchTab) {
          return key
        }
      }

      return key
    },

    // 页签过渡结束
    onTabTransitionEnd() {
      this.adjust()
    }
  }
}

export default RouterTab
