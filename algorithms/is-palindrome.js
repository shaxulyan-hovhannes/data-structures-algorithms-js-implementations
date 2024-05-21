// Without array reverse.

// O(N + 2) ignoring constants => O(N)
const isPalindromeV1 = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
};

// O(N / 2) ignorign constants => O(N)
const isPalindromeV2 = (str) => {
  let leftIndex = 0,
    rightIndex = str.length - 1;

  while (leftIndex < str.length / 2) {
    if (str[leftIndex++] !== str[rightIndex--]) return false;
  }

  return true;
};
