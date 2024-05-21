const sum = (arr) => {
  return arr.reduce(
    (acc, cur) => (Array.isArray(cur) ? acc + sum(cur) : acc + cur),
    0
  );
};

// Another recursive approach to get the sum of items in one-dimensional array
const getSum = (arr = []) => {
  if (arr.length === 1) return arr[0];

  return arr[0] + getSum(arr.slice(1));
};
