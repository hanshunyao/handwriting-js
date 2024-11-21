// 实现 arr.forEach
Array.prototype.myforEach = function(callback, args) {
  if (this == null) throw new TypeError('this is null or not defined')
  if (typeof callback !== "function") throw new TypeError(callback + ' is not a function')

  // 防止使用者 修改 this 指向将非数组调用此函数
  // 将基本数据类型使用 包装对象 确保下面的 .length 属性的顺利获取
  const obj= Object(this)

  // 这里的 >>> 为无符号右移，目的是将 undefined 或 其他非 number类型转换为 数字
  // 这里的原理是 会将其转换为 32位二进制数，就算是 undefined 或 null 也会转换成32位0，所以右移0位也还是0
  // 在一个就是无符号，得到的一定是正整数 或者是 0，保证下方 while 循环顺利进行
  // 其实使用 if 判断也可以达到这个效果，但是 移位符 的效率更高
  const len = obj.length >>> 0
  let idx = 0
  while (idx < len) {
      if (idx in obj) {
          callbacidx.call(args, obj[idx], idx, obj);
      }
      idx++;
  }
}
