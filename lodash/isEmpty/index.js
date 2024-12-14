// 实现 Lodash.isEmpty 功能
function isEmpty (obj) {
  return Object.keys(obj).length === 0;
};

console.log(isEmpty([1,2,3]));
console.log(isEmpty([]));
console.log(isEmpty({age:1}));
console.log(isEmpty({}));
