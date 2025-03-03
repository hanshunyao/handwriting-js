// 实现 function.call 方法
Function.prototype.myCall = function (context, ...args) {
  // 如果传了 this 就指向参数，如果没传就指向 window
  let obj = context || window;
  // 给 指向绑定一个 函数，key 用 symbol 保证唯一
  let fn = Symbol();
  obj[fn] = this;
  // 执行，返回返回值
  let res = obj[fn](...args);
  // 删除 绑定的函数
  delete obj[fn];
  // 返回 返回值
  return res;
};

function test(a, b) {
  console.log(a + b);
  console.log(this.name);
}
let obj = {
  name: 1,
};
test.myCall(obj, 1, 2);
