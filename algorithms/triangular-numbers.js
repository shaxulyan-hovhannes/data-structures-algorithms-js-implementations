// There is a sequence of so-called triangular numbers that starts as 1, 3, 6, 10, 15, 21
// and continues with the N-th number in the pattern being equal to N plus the previous number.
// For example, the seventh number in the sequence is 28, which is 7 (the number N) plus 21 (the previous number in the sequence).
// Write a function that takes the number N and returns the corresponding number in the sequence.
// For example, when this function is given the value 7, it should return 28.

const triangularNumber = (num) => {
  if (num < 0) return false;

  return num <= 1 ? num : num + triangularNumber(num - 1);
};
