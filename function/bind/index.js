// function.bind 实现
Function.prototype.myBind = function(context,...args){
  let fn = this;
  return function(...innerArgs){
    return fn.apply(context,[...args,...innerArgs]);
  }
}


