// 数组去重

/**
 * @description: 数字或字符串数组去重，效率高
 * @param {*} arr 去重数组
 * @return {*} 去重后数组
 */
function unique1(arr) {
  var result = {}; // 利用对象属性名的唯一性来保证不重复
  for (var i = 0; i < arr.length; i++) {
       if (!result[arr[i]]) {
           result[arr[i]] = true;
       }
  }
  return Object.keys(result); // 获取对象所有属性名的数组
}

/**
 * @description: 任意数组去重，适配范围广，效率低
 * @param {*} arr 去重数组
 * @return {*} 去重后数组
 */
function unique2(arr) {
  var result = []; // 结果数组
  for (var i = 0; i < arr.length; i++) {
       if (!result.includes(arr[i])) {
           result.push(arr[i]);
       }
  }
  return result;
}

// 利用ES6的Set去重，适配范围广，效率一般，书写简单
/**
 * @description: 
 * @param {*} arr 去重数组
 * @return {*} 去重后数组
 */
function uniqueEs6(arr) {
  return [...new Set(arr)];
}

/**
 * @description: 数组去重
 * @param {*} arr 去重数组
 * @return {*} 去重后数组
 */
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
