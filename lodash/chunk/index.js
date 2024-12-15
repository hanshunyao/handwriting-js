// 实现 Lodash.chunk 方法
function myChunk1(array, size = 1) {
  let temp = [];
  const result = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);
    if (temp.length === size || i === array.length - 1) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}

function myChunk2(array, size = 1) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
}
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray1 = myChunk1(originalArray, 3);
const chunkedArray2 = myChunk2(originalArray, 3);

console.log(chunkedArray1, chunkedArray2);
