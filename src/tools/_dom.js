/**
 * 获取元素的绝对地址
 * @param element
 * @returns {{x: *, y: *}}
 */
const getElementAbsolutePosition = (element) => {
  let x = element.offsetLeft,
    y = element.offsetTop
  while (element = element.offsetParent) {
    x += element.offsetLeft
    y += element.offsetTop
  }
  return {x, y}
}

export default {
  getElementAbsolutePosition: getElementAbsolutePosition
}
