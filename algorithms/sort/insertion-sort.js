const insertionSort = (arr) => {
  let i = 1;

  while (i < arr.length) {
    const current = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
      arr[j] = current;
    }
    i++;
  }
  return arr;
};
