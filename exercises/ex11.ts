// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.

const safeAccess = <T, K extends readonly (string | number)[]>(
  obj: T,
  keys: K
): any => {
  let current: any = obj;

  for (const key of keys) {
    if (current == null || !(key in current)) {
      return undefined;
    }
    current = current[key];
  }

  return current;
};

export default safeAccess;

const user = { name: "Pat", age: 25 };

safeAccess(user, ["name"]); 
// "Pat"

safeAccess(user, ["age"]); 
// 25

const data = {
  user: {
    profile: {
      email: "pat@example.com"
    }
  }
};

safeAccess(data, ["user", "profile", "email"]);
// "pat@example.com"

safeAccess(data, ["user", "address", "city"]);
// undefined

const store = {
  products: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" }
  ]
};

safeAccess(store, ["products", 1, "name"]);
// "Mouse"

const list = [
  { scores: [10, 20, 30] },
  { scores: [5, 15] }
];

safeAccess(list, [0, "scores", 2]);
// 30

safeAccess(list, [1, "scores", 5]);
// undefined

safeAccess(null as any, ["x"]);
// undefined