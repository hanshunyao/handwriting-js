// 实现 Lodash.difference 方法
function myDifference1(array, values) {
  const result = [];
  for (const element of array) {
    if (values.includes(element) === false && element !== undefined) {
      result.push(element);
    }
  }
  return result;
}

function myDifference2(array, values) {
  const valuesSet = new Set(values);
  return array.filter((value) => !valuesSet.has(value));
}
console.log(
  myDifference1([], []),
  myDifference1([1, 1, 2, 3], [2, 3]),
  myDifference1([1, 2, 3], [1, 2, 3, 4]),
  myDifference1([4, 3, 2, 1], [1, 2, 3])
);

console.log(
  myDifference2([], []),
  myDifference2([1, 1, 2, 3], [2, 3]),
  myDifference2([1, 2, 3], [1, 2, 3, 4]),
  myDifference2([4, 3, 2, 1], [1, 2, 3])
);
