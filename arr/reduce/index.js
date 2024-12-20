// 实现 arr.reduce 功能
Array.prototype.myReduce = function (callback, ...args) {
  let start = 0,
    pre;
  if (args.length) {
    pre = args[0];
  } else {
    pre = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial1 = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
const sumWithInitial2 = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial1, sumWithInitial2);
// Expected output: 10
