// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.

const getFirstElement = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

export default getFirstElement;

getFirstElement([10, 20, 30]); 
// 10

getFirstElement(["Pat", "Ana", "TS"]);
// "Pat"

getFirstElement([{ id: 1 }, { id: 2 }]);
// { id: 1 }

getFirstElement([]);
// undefined