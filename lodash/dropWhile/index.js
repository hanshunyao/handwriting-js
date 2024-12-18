// 实现 Lodash.dropWhile 方法
function myDropWhile1(array, predicate) {
  let index = 0;

  while (index < array.length && predicate(array[index], index, array)) {
    index++;
  }
  return array.slice(index);
}

function myDropWhile2(array, predicate) {
  let droppedCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      break;
    }
    droppedCount++;
  }

  return array.slice(droppedCount);
}

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  myDropWhile1([1, 2, 3, 4, 5, 6], (value) => value < 4),
  myDropWhile1([0, 1, 2], (value) => value < 5),
  myDropWhile2([1, 2, 3, 4, 5, 6], (value) => value < 4),
  myDropWhile2([0, 1, 2], (value) => value < 5)
);
