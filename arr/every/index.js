// 实现 arr.every
Array.prototype.myEvery = function(callbackFn) {
  const _arr = this
  const thisArg = arguments[1] || window;
  const flag = true;
  for (let i = 0; i<_arr.length; i++) {
      if (!callbackFn.call(thisArg, _arr[i], i, _arr)) {
          return false;
      }
  }
  return flag;
}
