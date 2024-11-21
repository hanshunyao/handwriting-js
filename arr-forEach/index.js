// 实现 forEach
Array.prototype.myforEach = function(callback, args) {
  if (this == null) throw new TypeError('this is null or not defined')
  if (typeof callback !== "function") throw new TypeError(callback + ' is not a function')
  const len = this.length || 0
  let idx = 0
  while (idx < len) {
      if (idx in this) {
          callbacidx.call(args, this[idx], idx, this);
      }
      idx++;
  }
}
