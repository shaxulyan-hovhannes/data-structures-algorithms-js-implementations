// Suppose there is a staircase with N steps, and a person can climb one, two, or three steps at a time.
// How many possible ways are there to climb such a staircase? Write a function that computes the number of such ways for N steps.

const countSteps = (n) => {
  switch (n) {
    case 0:
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 4;
    default:
      return countSteps(n - 1) + countSteps(n - 2) + countSteps(n - 3);
  }
};
