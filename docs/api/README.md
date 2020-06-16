---
sidebar: auto
---

# API

## RouterTab 配置参数

### default-page

默认页面，最后一个页签关闭或者页签重置后跳转的默认地址。

程序会自动获取页签父路由地址为默认页面。

- 类型: `String | Object` location 地址

- 默认值: 页签组件父路由地址。

### keep-last-tab

是否保留最后一个页签不被关闭

- 类型: `Boolean`

- 默认值: `true`

### i18n

页签国际化转换

- 类型: `Function`

- 参数:

  - `{String} [key]`: 国际化字段 `key`

  - `{Array} [params]` 国际化字段参数列表

- 返回: `Strong` 国际化转换后的字符串

### language

组件语言

- 类型: `String | Object`

  - 如果类型为 `String` ，可以设置为内置的语言 `'zh-CN'` (默认) 和 `'en'`

  - 如果类型为 `Object` ，可设置自定义的语言

- 默认值: `'zh-CN'`

### tabs

**初始页签数据**，进入页面时默认显示的页签。相同 `key` 的页签只保留第一个

- 类型: `Array <String | Object>`

  - tabs 子元素类型为 `String` 时，应配置为要打开页面的 `fullPath` ，页签的标题、图标、提示等信息会从对应页面的 `router` 配置中获取

  - tabs 子元素类型为 `Object` 时:

    - to: 页签路由地址，跟 `router.push` 的 `location` 参数一致，可以为 `fullPath`，也可以为 `location` 对象 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)

    - title: 页签标题，如果页面有设置 `routerTab.title` 动态标题，可在此设置最终的动态标题值，以免与默认从 `router` 获取的标题不一致

    - closable: 页签是否允许关闭，默认为 `true`

- 默认值: `[]`

### restore

**是否在浏览器刷新后恢复页签**

开启后，浏览器刷新后将会还原刷新前的页签

- 类型: `Boolean | String`

  - 类型为 `String` 且不为空字符串时，RouterTab 会拼接该值作为 sessionStorage 的 key 来本地存储页签信息

- 默认值: `false`

### restore-watch

**是否监听 restore 参数自动恢复页签**

开启后，RouterTab 会监听传入的 restore 值，改变后自动恢复对应配置的页签

- 类型: `Boolean`

- 默认值: `false`

### router-view

内置 `router-view` 组件的配置

- 类型: `Object`

  > 配置参考: [Vue Router - \<router-view\> Props](https://router.vuejs.org/zh/api/#router-view-props)

- 默认值: `{}`

### tab-transition

**页签过渡效果**，新增和关闭页签时的过渡

- 类型: `String | Object`

  - 类型为 `String` 时，应配置为 `transition.name`

  - 类型为 `Object` 时，配置参考: [Vue - transition](https://cn.vuejs.org/v2/api/#transition)

- 默认值: `'router-tab-zoom'`

### page-transition

页面过渡效果

- 类型: `String | Object`

  同 [`tab-transition`](#tab-transition)

- 默认值: `{ name: 'router-tab-swap', mode: 'out-in' }`

## RouterTab 实例属性

在组件内部可通过 `this.$routerTab.[prop]` 访问

### routerTab.activeTabId

当前激活的页签 id

## RouterTab 实例方法

::: tip
在 Vue 实例内部，您可以通过 `this.$routerTab` 来访问路由页签实例。例如: 调用 `this.$routerTab.close()` 来关闭当前页签。
:::

### routerTab.open

打开指定地址的页签（默认为全新打开）

- 参数:
  - `{String | Object} [path]` 要打开的路由地址 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [isReplace = false]` 是否 `$router.replace` 方式打开
  - `{Boolean} [refresh = true]` 是否全新打开（会清理之前的页签页面缓存）

### routerTab.close

关闭指定页签

- 调用:

  1. `this.$routerTab.close({id, path, match, force, to, refresh})`
  2. `this.$routerTab.close(path, to)`

- 参数:

  - `{String} [id]` 通过页签 id 关闭
  - `{location} [path]` 通过路由路径关闭页签，如果未配置 id 和 path 则关闭
  - `{Boolean} [match = true]` path 方式关闭时，是否匹配 path 完整路径
  - `{Boolean} [force = true]` 是否强制关闭
  - `{location} to` 关闭后跳转的地址，为 null 则不跳转
  - `{Boolean} [refresh = false]` 是否全新打开跳转地址

### routerTab.refresh

刷新指定路由地址的页签

- 参数:
  - `{location} [path]` 路由地址 - [参考文档](https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [match = true]` 是否全匹配（匹配 fullPath 去除 hash 部分）
  - `{Boolean} [force = true]` 是否强制刷新

### routerTab.refreshAll

刷新所有页签

- 参数:
  - `{Boolean} [force = false]` 如果 `force` 为 `true`，则忽略页面组件的 `beforePageLeave` 配置，强制刷新所有页签

### routerTab.reset

重置页签到初始状态

- 参数:
  - `{location} [to]` 重置后跳转的地址，默认为 `default-page`

### routerTab.openIframe

打开 iframe 页签

- 参数:
  - `{String} [src]` 要打开的 iframe 页签链接
  - `{String} [title]` 页签标题
  - `{String} [icon]` 页签图标

### routerTab.closeIframe

关闭 iframe 页签

- 参数:
  - `{String} [src]` 要关闭的 iframe 页签链接

### routerTab.refreshIframe

刷新 iframe 页签

- 参数:
  - `{String} [src]` 要刷新的 iframe 页签链接

## RouterTab 事件

### iframe-mounted

iframe 节点挂载就绪

- 参数:
  - `{String} [url]` iframe 的链接地址
  - `{HTMLIFrameElement} [iframe]` iframe 节点

### iframe-loaded

iframe 内容加载成功

- 参数:
  - `{String} [url]` iframe 的链接地址
  - `{HTMLIFrameElement} [iframe]` iframe 节点

## Route.meta 路由元信息

通过路由的 `meta` 信息，我们可以配置路由页签的标题、图标、提示和缓存规则

| 属性     | 说明         | 类型                | 默认值     | 备注                                                                         |
| -------- | ------------ | ------------------- | ---------- | ---------------------------------------------------------------------------- |
| key      | 缓存规则     | `String | Function` | -          | 生成页面组件缓存的 ID。<br>配置参考: [RouterTab Props > alive-id](#alive-id) |
| title    | 页签标题     | `String | Array`    | `'无标题'` | 支持国际化，参考: [教程 - 多语言支持](../guide/essentials/i18n.md)           |
| tips     | 鼠标悬浮提示 | `String | Array`    | 和标题一致 | 支持国际化，参考: [教程 - 多语言支持](../guide/essentials/i18n.md)           |
| icon     | 图标         | `String`            | -          | -                                                                            |
| tabClass | 页签 class   | `String`            | -          | -                                                                            |
| closable | 是否可关闭   | `Boolean`           | `true`     | -                                                                            | - |

## 扩展

::: tip 说明
`vm`: Vue 组件实例

`pageVm`: 通过 RouterTab 加载的页面组件实例
:::

### beforePageLeave

页面离开确认。

页面组件选项，与 `data`, `methods` 等选项并列配置

- 参数:
  - `{Function} resolve` 执行后允许离开页签
  - `{Function} reject` 执行后阻止离开页签
  - `{Object} tab` 页签信息
  - `{String} type` 离开类型: `close`: '关闭', `refresh`: '刷新', `replace`: '替换'

### vm.\$routerTab

RouterTab 实例

为了方便调用，RouterTab 将实例挂载在 `Vue.prototype` 上。因此，在所有 Vue 组件内部，您都可以通过 `this.$routerTab` 来访问路由页签实例

### pageVm.routeTab

路由页签配置

RouterTab 通过监听页面组件的 `this.routeTab` 来更新页面对应页签的标题、图标、提示

### pageVm.\_isRouterPage

是否是路由页面

在通过 RouterTab 加载的页面组件内部，访问 `this._isRouterPage` 会返回 `true`

::: tip
应用: 在需要给路由页面添加全局混入 `mixin` 时，可在生命周期钩子（ `created` 之后）里判断 `this._isRouterPage`
:::
