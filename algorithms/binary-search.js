const binarySearch = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    const item = arr[mid];

    if (item > target) {
      start = mid + 1;
    } else if (item < target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
