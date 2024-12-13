//排序的本质： 排序只不是比较大小，是比较和交换
// 冒泡排序

// 分步实现功能
/**
 * @description: 对比 ab 两个数来判断是否交换位置
 * @param {number} a
 * @param {number} b
 * @return {*} 是否交换
 */
function compare(a, b) {
  //比较之后需要得出是否需要交换
  if (a > b) return true;
  else return false;
}

/**
 * @description: 将数组中ab位置里的值进行交换
 * @param {array} arr
 * @param {number} a
 * @param {number} b
 */
function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * @description: 排序
 * @param {array} arr
 */
function sort(arr) {
  if (arr === null) return;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1);
      }
    }
  }
}

// 用一个函数完成
/**
 * @description: 完整冒泡函数
 * @param {*} arr
 * @return {*}
 */
function bubbleSort(arr) {
  if (arr === null) return;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr1 = [2, 3, 7, 5, 1, 8, 6, 9, 0, 4];
const arr2 = [...arr1];

sort(arr1);
bubbleSort(arr2);

console.log(arr1, arr2);
