// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.

const duplicateElements = <T>(arr: T[], n: number): T[] => {
  const result: T[] = [];

  for (const element of arr) {
    for (let i = 0; i < n; i++) {
      result.push(element);
    }
  }

  return result;
};

export default duplicateElements;

duplicateElements([1, 2, 3], 2);
// [1, 1, 2, 2, 3, 3]

duplicateElements(["a", "b"], 3);
// ["a", "a", "a", "b", "b", "b"]

duplicateElements([], 5);
// []

duplicateElements([1, 2, 3], 0);
// []