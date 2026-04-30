// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items: Map<K, V>;

  constructor() {
    this.items = new Map<K, V>();
  }

  add(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  delete(key: K): boolean {
    return this.items.delete(key);
  }
}

export default Dictionary;

const prices = new Dictionary<string, number>();
prices.add("Pencil", 10);
prices.add("Notebook", 25);

console.log(prices.get("Pencil")); // 10
console.log(prices.get("Notebook")); // 25

const users = new Dictionary<number, string>();
users.add(1, "Pat");
users.add(2, "Ana");

console.log(users.get(1)); // "Pat"
console.log(users.get(2)); // "Ana"

interface User {
  id: number;
  name: string;
}

const userDict = new Dictionary<number, User>();
userDict.add(1, { id: 1, name: "Pat" });
userDict.add(2, { id: 2, name: "Ana" });

console.log(userDict.get(2)); 
// { id: 2, name: "Ana" }

prices.delete("Pencil"); // true
prices.get("Pencil"); // undefined
