// 实现 Lodash.fromPairs 方法
function myFromPairs1(pairs) {
  const result = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
}

function myFromPairs2(pairs) {
  return Object.fromEntries(pairs);
}

console.log(
  myFromPairs1([
    ['fred', 30],
    ['barney', 40],
  ]),
  myFromPairs2([
    ['fred', 30],
    ['barney', 40],
  ])
);
