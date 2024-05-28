// Using recursion, write a function that takes a string and returns the first occurrence of the index corresponding to the character "x".
// For example, the string "abcdefghijklmnopqrstuvwxyz" contains "x" at index 23.
// To make it easier, let's assume that the string passed to the function contains at least one "x".

const findTargetIndex = (str, target) => {
  if (!str.length) return -1;

  if (str[0] === target) return 0;

  const result = findTargetIndex(str.slice(1), target);

  return result === -1 ? -1 : result + 1;
};
