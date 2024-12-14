function chunk1(array, size = 1) {
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

function chunk2(array, size = 1) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
}
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray1 = chunk1(originalArray, 3);
const chunkedArray2 = chunk2(originalArray, 3);

console.log(chunkedArray1, chunkedArray2);
