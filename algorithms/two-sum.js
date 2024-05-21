// The problem from Leet Code
//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// My implementation of O(N / 2) ignoring constants O(N) effeciency

const twoSum = (arr, target) => {
  const hash = {};

  for (let i = 0; i < arr.length; i += 2) {
    const item = arr[i];
    const nextItem = arr[i + 1];

    if (item + nextItem === target) {
      return [i, i + 1];
    } else if (hash[target - item] !== undefined) {
      return [hash[target - item], i];
    } else if (hash[target - nextItem] !== undefined) {
      return [hash[target - nextItem], i + 1];
    } else {
      hash[item] = i;
      hash[nextItem] = i + 1;
    }
  }
  return [];
};
