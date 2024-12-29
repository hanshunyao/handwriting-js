// 实现 arr.fill
Array.prototype.myFill = function (value, start = 0, end = this.length) {
  const arr = [...this]
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }
  if (end > arr.length) {
    end = arr.length;
  }
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
  return arr;
}

// 调用
const arr = [1, 2, 3, 4]
const newArr1 = arr.myFill(0)
const newArr2 = arr.myFill(0, 2, 4);
const newArr3 = arr.myFill(5, 1);
console.log(newArr1,newArr2,newArr3);
