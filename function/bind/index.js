// function.bind 实现
// ES6
Function.prototype.myBind1 = function (context, ...outerArgs) {
  var fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...outerArgs, ...innerArgs]);
  };
};

// ES5
Function.prototype.myBind2 = function (asThis) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error("不是一个方法！");
  }
  return function () {
    var args2 = slice.call(arguments, 0);
    return fn.apply(asThis, args.concat(args2));
  };
}
