// function.bind 实现
Function.prototype.myBind = function (context, ...outerArgs) {
  var fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...outerArgs, ...innerArgs]);
  };
};
