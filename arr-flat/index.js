// 数组扁平化
const arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// flat(depth) depth 层数，不写默认1层，Infinity 是展开所有层

function flatEs5(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatEs5(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flatEs6(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

const arrFlat1 = arr1.flat(Infinity);
const arrFlat2 = flatEs5(arr1);
const arrFlat3 = flatEs6(arr1);
console.log(arrFlat1, arrFlat2, arrFlat3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
