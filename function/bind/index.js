// function.bind 实现
// 完整版
Function.prototype.myBind = function (context, ...args) {
  if (typeof context === 'undefined' || context === null) {
    context = window;
  }
  // 存一下 之前的 this 指向
  let fn = this;
  let fBound = function (...args) {
    // 这个地方判断，返回的方法是不是通过 new 调用的
    let isNewClass = this instanceof fBound;
    // 如果绑定后的函数是通过 new 调用的（例如 new boundFn()），那么 this 应该指向新创建的对象，而不是原来的 context。
    let innerContext = isNewClass ? this : context;
    return fn.apply(innerContext, [...args, ...innerArgs]);
  };
  // 如果 外层上有原型 继承到内层
  // 找一个空 函数
  let Box = function () {};
  if (fn.prototype) {
    // 空函数 继承了 fn 的原型
    box.prototype = fn.prototype;
  }
  // 使用 Box 的主要目的是为了避免直接修改 fBound.prototype 会影响到 fn.prototype。
  // 如果直接将 fBound.prototype 设置为 fn.prototype，那么如果后续修改了 fBound.prototype，可能会不小心影响到原函数 fn 的原型(两个用的是一个引用)
  // 通过引入 Box 作为中间层，我们可以确保 fBound 继承了 fn 的原型，但又不会直接引用 fn.prototype，从而避免潜在的副作用。
  // 实例的更改不影响构造函数本身
  // 这样设计的目的是为了避免意外的原型链污染和副作用。
  fBound.prototype = new Box();
  return fBound;
};
// 简化版
Function.prototype.myBind = function(context) {
  if (typeof context === "undefined" || context === null) {
      context = window;
  }
  self = this;
  return function(...args) {
      return self.apply(context, args);
  }
}
