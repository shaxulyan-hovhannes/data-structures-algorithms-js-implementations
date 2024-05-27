const bubbleSort = (arr) => {
  let swaped;

  do {
    swaped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      const item = arr[i];

      const nextItem = arr[i + 1];

      if (item > nextItem) {
        const tmp = item;

        arr[i] = nextItem;
        arr[i + 1] = tmp;

        swaped = true;
      }
    }
  } while (swaped);

  return arr;
};
