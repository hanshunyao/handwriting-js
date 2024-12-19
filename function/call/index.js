// 实现 function.call 方法
Function.prototype.myCall = function (context = window) {
  if (typeof this !== 'function') return new Error('类型错误');
  const obj = context || window;
  obj.fn = this;
  const arg = [...arguments].slice(1);
  res = obj.fn(...arg);
  delete obj.fn;
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
