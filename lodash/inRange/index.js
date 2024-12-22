// 实现 Lodash.inRange 方法
function myInRange(value, start, end = 0) {
  return value >= Math.min(start, end) && value < Math.max(start, end);
}

myInRange(3, 2, 4);
// => true

myInRange(4, 8);
// => true

myInRange(-3, -2, -6);
// => true

console.log(myInRange(3, 2, 4), myInRange(4, 8), myInRange(-3, -2, -6));
