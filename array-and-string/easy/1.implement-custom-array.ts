// Implement custom array and manage the element, size and methods

class MyArray<T> {
  private data: { [index: number]: T };
  private length: number;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  // Get the element at a specific index
  get(index: number): T | undefined {
    return this.data[index];
  }

  // Add an element to the end of an array
  push(item: T): number {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  // Remove last element
  pop(): T | undefined {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // Delete an element at a specific index
  delete(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    const deletedItem = this.data[index];
    // To delete an item at a specific index, all items following that index must be shifted to the left.
    this.shiftItems(index, true);

    return deletedItem;
  }

  // Insert an item at a specific index
  insert(index: number, item: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    // To create space for a new item at a specific index, all items at or after that index must be shifted to the right.
    this.shiftItems(index);

    // insert item at index
    this.data[index] = item;
    this.length++;
  }

  // traverse item through array
  traverse(callback: (item: T, index: number) => void): void {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i);
    }
  }

  get size(): number {
    return this.length;
  }

  // helper method to shift elements after insertion or deletion
  private shiftItems(index: number, remove: boolean = false) {
    if (remove) {
      // Shift elements left to fill the gap created by removing an item
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      // Remove the last item to clean up the duplicate caused by shifting
      delete this.data[this.length - 1];
      this.length--;
    } else {
      // Shift elements right to make space for the new item
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }
    }
  }
}

const arr = new MyArray();
// Push elements
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
console.log("After pushing 4 element -> ", arr); // Output: { data: { '0': 10, '1': 20, '2': 30, '3':40 }, length: 4 }

// Removing element from end
arr.pop();
console.log("After removing last element => ", arr); // Output: { data: { '0': 10, '1': 20, '2': 30 }, length: 3  }

// Get element
console.log(`Item at index-1 = ${arr.get(1)}`); // Output: 20

// Delete an element
arr.delete(1);
console.log("After deleting item at index-1 -> ", arr); // Output: { data: { '0': 10, '1': 30 }, length: 2 }

// Insert an element
arr.insert(1, 25);
console.log("After inserting a new element at index 1 -> ", arr); // Output: { data: { '0': 10, '1': 25, '2': 30 }, length: 3 }

// Traversing the array
console.log("Traversing the array ---");

arr.traverse((item, index) => console.log(`Index ${index}: ${item}`));

// Get the size of the array
console.log(`Array length => ${arr.size}`); // Output: 3
