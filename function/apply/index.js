// 实现 function.apply 方法
Function.prototype.myApply = function (context) {
  let obj = context || window;
  let args = arguments[1] || [];
  let fn = Symbol();
  obj[fn] = this;
  let res = obj[fn](...args);
  delete obj.fn;
  return res;
};

function f(a, b) {
  console.log(a, b);
  console.log(this.name);
}
let obj = {
  name: '张三',
};
f.myApply(obj, [1, 2]);
