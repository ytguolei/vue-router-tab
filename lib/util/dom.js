import { isDef } from './index'

// 滚动
export function scrollTo($el, left = 0, top = 0) {
  if ($el.scrollTo) {
    $el.scrollTo({
      left,
      top,
      behavior: 'smooth'
    })
  } else {
    $el.scrollLeft = left
    $el.scrollTop = top
  }
}
