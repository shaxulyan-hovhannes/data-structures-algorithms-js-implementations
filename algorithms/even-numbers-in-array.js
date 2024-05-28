// Using recursion, write a function that takes an array of numbers and returns a new array containing only the even numbers.

const eventNumbersRecursive = (arr = []) => {
  if (!arr.length) return [];

  const firstItem = arr[0];
  const restItems = arr.slice(1);

  if (firstItem % 2 === 0) {
    return [firstItem].concat(eventNumbersRecursive(restItems));
  } else {
    return eventNumbersRecursive(restItems);
  }
};
