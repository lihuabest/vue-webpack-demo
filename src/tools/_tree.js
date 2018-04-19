/**
 * 树形结构遍历
 * @param trees
 * @param options
 * options.children 子节点所在的key
 * options.callback 回调函数的key
 */
const treesTraverse = (trees, options) => {
  options.children = options.children || 'children'

  let temp = [].concat(trees), tem
  while (temp.length) {
    tem = temp.pop()
    options.callback && options.callback(tem)

    if (tem[options.children] && tem[options.children].length) {
      temp = temp.concat(tem[options.children]) // 广度遍历
      // temp = tem[options.children].concat(temp) // 深度遍历
    }
  }
}

export default {
  treesTraverse
}
