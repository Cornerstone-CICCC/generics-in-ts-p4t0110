// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.

const identity = <T>(value: T): T => {
  return value;
};

export default identity;

// Number
const num = identity(42); 
//    ^? number

// String
const str = identity("TypeScript rocks!");
//    ^? string

// Custom object
const user = identity({ name: "Pat", level: 9000 });
//    ^? { name: string; level: number }

// Array
const list = identity([1, 2, 3]);
//    ^? number[]
