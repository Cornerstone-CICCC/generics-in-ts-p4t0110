// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

export default Stack;


const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack.pop()); // 30
console.log(numberStack.peek()); // 20
console.log(numberStack.size()); // 2

const stringStack = new Stack<string>();
stringStack.push("Pat");
stringStack.push("Ana");

console.log(stringStack.pop()); // "Ana"
console.log(stringStack.peek()); // "Pat"

interface User {
  id: number;
  name: string;
}

const userStack = new Stack<User>();
userStack.push({ id: 1, name: "Pat" });
userStack.push({ id: 2, name: "Ana" });

console.log(userStack.pop()); 
// { id: 2, name: "Ana" }

const empty = new Stack<boolean>();
console.log(empty.pop()); // undefined
console.log(empty.isEmpty()); // true