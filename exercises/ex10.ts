// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.

const customMap = <T, U>(arr: T[], mapper: (item: T) => U): U[] => {
  const result: U[] = [];

  for (const item of arr) {
    result.push(mapper(item));
  }

  return result;
};

export default customMap;

customMap([1, 2, 3], (n) => n * 2);
// [2, 4, 6]

customMap(["pat", "ana"], (s) => s.toUpperCase());
// ["PAT", "ANA"]

customMap([1, 2, 3], (n) => `#${n}`);
// ["#1", "#2", "#3"]

customMap(
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  (obj) => obj.id
);
// [1, 2, 3]

customMap([], (x) => x);
// []