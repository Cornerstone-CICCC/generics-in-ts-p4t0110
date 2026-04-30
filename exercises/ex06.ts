// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.

const createPair = <A, B>(first: A, second: B): [A, B] => {
  return [first, second];
};

export default createPair;

createPair(10, "Pat");
// [10, "Pat"]
// type: [number, string]

createPair("Hello", true);
// ["Hello", true]
// type: [string, boolean]

createPair({ id: 1 }, [1, 2, 3]);
// [{ id: 1 }, [1, 2, 3]]
// type: [{ id: number }, number[]]

createPair([1, 2], ["a", "b"]);
// [[1,2], ["a","b"]]