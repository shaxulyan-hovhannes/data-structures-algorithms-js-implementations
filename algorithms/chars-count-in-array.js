// Using recursion, write a function that takes an array of strings and returns the total number of characters in all the strings.
// For example, if the input array is ["ab", "c", "def", "ghij"], then this function should return 10, since there are 10 characters in the array.

const charsCountRecursive = (arr) => {
  const firstItem = arr[0];

  if (!firstItem || typeof firstItem !== "string") return 0;

  return firstItem.length + getCharsCount(arr.slice(1));
};
