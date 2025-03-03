// 实现 function.call 方法
Function.prototype.myCall = function (context = window, ...args) {
  const obj = context || window;
  let fn = Symbol();
  obj[fn] = this;
  const res = context[fn](...args);
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
test.myCall2(obj, 1, 2);
