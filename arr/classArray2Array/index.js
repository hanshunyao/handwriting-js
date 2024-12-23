// 类数组转换为数组
const arrLike = {
  0: 'zhangsan',
  1: 'lisi',
  2: 'wangwu',
  3: 'zhaoliu',
  4: 'xiaoming',
  5: 'xiaohong',
  length: 6,
};

const arr1 = Array.from(arrLike);
const arr2 = Array.prototype.slice.call(arrLike);
// 拥有迭代器的对象才可以用展开运算符
// const arr3 = [...arrLike];
const arr4 = Array.prototype.concat.apply([], arrLike);
console.log(arr1, arr2, arr4);
