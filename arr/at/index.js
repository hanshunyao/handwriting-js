// arr.at 方法实现
Array.prototype.myAt = function (index) {
  const actualIndex = index >= 0 ? index : index + this.length;
  return this[actualIndex];
};
const arr = ['apple', 'banana'];

console.log(arr.at(0), arr.at(1), arr.at(2), arr.at(-1), arr.at(-2));
