// O(N**2) | O(N * M)
const intersectionV1 = (arr1 = [], arr2 = []) => {
  const output = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
        break;
      }
    }
  }

  return output;
};

const intersectionV2 = (arr1 = [], arr2 = []) => {
  const hash = {};

  const output = [];

  for (let i = 0; i < arr1.length; i++) {
    hash[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];

    if (hash[item]) {
      output.push(item);
    }
  }

  return Array.from(new Set(output));
};
