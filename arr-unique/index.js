// 数组去重
function uniqueEs6(arr) {
  return [...new Set(arr)];
}

function uniqueEs5(arr) {
  var res = arr.filter(function (item, idx, array) {
    // 有多个 只有第一个为 true
    return array.indexOf(item) === idx;
  });
  return res;
}

var arr = [1, 2, 3, 3, 2, 1, 4];
var newArr1 = uniqueEs6(arr);
var newArr2 = uniqueEs5(arr);

console.log(newArr1, newArr2);
