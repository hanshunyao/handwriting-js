// 实现 Lodash.compact 方法
function myCompact1(array) {
  const result = [];
  for (const value of array) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}

function myCompact2(array) {
  return array.filter(Boolean);
}

console.log(
  myCompact1([0, 1, false, 2, '', 3]),
  myCompact2([0, 1, false, 2, '', 3])
);
