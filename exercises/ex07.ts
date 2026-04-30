// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U extends string>(
  arr: T[],
  type: U
): T[] => {
  return arr.filter((item) => typeof item === type);
};

export default filterByType;

filterByType([1, "hello", true, 99, "TS"], "string");
// ["hello", "TS"]

filterByType([10, "x", 20, false, 30], "number");
// [10, 20, 30]

filterByType([true, 1, false, "ok"], "boolean");
// [true, false]


filterByType([1, {}, "wsuppppp", { id: 1 }], "object");
// [{}, { id: 1 }]

filterByType([], "string");
// []