// 实现 Lodash.isEmpty 功能
function myIsEmpty (obj) {
  return Object.keys(obj).length === 0;
};

console.log(myIsEmpty([1,2,3]));
console.log(myIsEmpty([]));
console.log(myIsEmpty({age:1}));
console.log(myIsEmpty({}));
