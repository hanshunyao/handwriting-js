function insertSort(array) {
  for (let i = 1, length = array.length; i < length; i++) {
    let j = i - 1;
    const curValue = array[i];

    while (j >= 0 && array[j] > curValue) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = curValue;
  }

  return array;
}

console.log(insertSort([-23, 2, 45, 12]));
