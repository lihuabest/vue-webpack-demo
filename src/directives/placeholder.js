export default {
  install: (Vue) => {
    Vue.directive('placeholder', {
      inserted: (el, bind) => {
        if (!('placeholder' in document.createElement('input'))) {
          let placeholderText = el.getAttribute('placeholder')
          let left = el.offsetLeft
          let top = el.offsetTop
          let height = el.offsetHeight

          let placeholderNode = document.createElement('span')
          placeholderNode.innerHTML = placeholderText
          placeholderNode.style.position = 'absolute'
          placeholderNode.style.left = left + 'px'
          placeholderNode.style.top = top + 'px'
          placeholderNode.style.fontSize = (bind.value && bind.value.fontSize) || '12px'
          placeholderNode.style.color = (bind.value && bind.value.color) || '#666'

          el.parentNode.insertBefore(placeholderNode, el)

          let offsetTop = (height - placeholderNode.offsetHeight) / 2
          let offsetLeft = window.getComputedStyle(el)['paddingLeft']
          placeholderNode.style.marginTop = offsetTop + 'px'
          placeholderNode.style.marginLeft = offsetLeft

          placeholderNode.addEventListener('click', () => {
            el.focus()
          }, false)

          let callback = () => {
            let value = el.value
            console.log(value)
            if (!value) {
              placeholderNode.style.display = 'block'
            } else {
              placeholderNode.style.display = 'none'
            }
          }
          // ie专属事件
          el.attachEvent('onpropertychange', () => {
            callback()
          }, false)
          el.addEventListener('blur', () => {
            callback()
          }, false)
        }
      }
    })
  }
}
