exports.test = function () {
    console.log('test success')
}

/**
 * state 更新工具函数
 * @param  {[type]} oldO    修改的（state）对象
 * @param  {[type]} newO    更新的数据
 * @param  {[type]} key     指定对应的key进行更新
 * @return {[type]}          [description]
 */
exports.upDateObjOrArray = function (oldO, newO, key) {
    if (newO !== undefined) {
      switch (Object.prototype.toString.apply(oldO)) {
        case '[object Object]':
          if (key && Object.prototype.toString.apply(key) === '[object String]') {
            // 对应key更新
            switch (Object.prototype.toString.apply(oldO[key])) {
              case '[object Object]':
              case '[object Array]':
                upDateObjOrArray(oldO[key], newO);
                break;
              default:
                // 布尔值， 数字， 字符串
                oldO[key] = newO;
                break;
            }
          } else {
            // 循环更新所有
            Object.keys(oldO).map(key => {
              upDateObjOrArray(oldO, newO[key], key);
            });
          }
          break;
        case '[object Array]':
          if (
            Object.prototype.toString.apply(key) === '[object Number]' &&
            key < oldO.length - 1
          ) {
            oldO.splice(key, 1, newO);
          } else {
            oldO.splice(0);
            newO.map(itm => oldO.push(itm));
          }
          break;
        default:
          // eslint-disable-next-line
          console.error('upDateObjOrArray函数 传参错误');
          break;
      }
    }
}
  
// 拷贝文字
exports.copyText = function (input) {
  const el = document.createElement('textarea')

  el.value = input

  // Prevent keyboard from showing on mobile
  el.setAttribute('readonly', '')

  el.style.contain = 'strict'
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.fontSize = '12pt' // Prevent zooming on iOS

  const selection = document.getSelection()
  let originalRange = false
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0)
  }

  document.body.appendChild(el)
  el.select()

  // Explicit selection workaround for iOS
  el.selectionStart = 0
  el.selectionEnd = input.length

  let success = false
  try {
    success = document.execCommand('copy')
  } catch (err) {}

  document.body.removeChild(el)

  if (originalRange) {
    selection.removeAllRanges()
    selection.addRange(originalRange)
  }

  return success
}