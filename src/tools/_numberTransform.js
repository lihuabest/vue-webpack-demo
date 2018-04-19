/**
 * 数据转换 1234 -> 1,234
 * @param value
 * @param connector
 * @returns {any}
 */
export default (value, connector = ',') => {
  value = value + ''

  let temp = []
  if (value.length > 3) {
    value = value.split('').reverse()
    for (let i = 0; i < value.length; i++) {
      if ((i + 1) < value.length && (i + 1) % 3 === 0) {
        temp.push(value[i])
        temp.push(connector)
      } else {
        temp.push(value[i])
      }
    }
  }

  return temp.length ? temp.reverse().join('') : value
}
