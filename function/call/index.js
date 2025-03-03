// 实现 function.call 方法
Function.prototype.myCall = function (context = window) {
  let obj = context || window;
  let args = [...arguments].slice(1);
  let fn = Symbol();
  obj[fn] = this;
  let res = context[fn](...args);
  delete obj[fn];
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
