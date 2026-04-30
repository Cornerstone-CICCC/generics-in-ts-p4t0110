// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.

const reverseArray = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

export default reverseArray;

reverseArray([1, 2, 3, 4]); 
// [4, 3, 2, 1]

reverseArray(["a", "b", "c"]);
// ["c", "b", "a"]

reverseArray([
  { id: 1, name: "Pat" },
  { id: 2, name: "Ana" }
]);
// [{ id: 2, name: "Ana" }, { id: 1, name: "Pat" }]

reverseArray([1, "hola", true]);
// [true, "hola", 1]