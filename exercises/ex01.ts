// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = <T, U>(a: T, b: U): string | number | void => {
  const typeA = typeof a;
  const typeB = typeof b;

  const validTypes = ["string", "number"];
  if (!validTypes.includes(typeA) || !validTypes.includes(typeB)) {
    console.error("Error: arguments must be string or number");
    return;
  }

  if (typeA !== typeB) {
    console.error("Error: arguments must be of the same type");
    return;
  }

  if (typeA === "string") {
    return (a as string).concat(b as string);
  }

  return (a as number) + (b as number);
};

export default concatSum;
