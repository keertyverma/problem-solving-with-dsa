class MyNode<T> {
  public data: T;
  public next: MyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: MyNode<T> | null = null;
  private tail: MyNode<T> | null = null;
  private length: number = 0;

  public printList(): void {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }

  public getSize(): number {
    return this.length;
  }

  // Add a node at the end of the list.Time complexity -> O(1)
  public append(data: T) {
    // create new node
    const newNode = new MyNode(data);

    // check if list is empty
    if (!this.head) {
      // make new node the head
      this.head = this.tail = newNode;
    } else {
      // set the next pointer of tail node to the new node
      this.tail!.next = newNode;
      // move the tail to point to new node
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a node at the beginning of the list. Time complexity -> O(1)
  public prepend(data: T) {
    // Create a new node with the given value
    const newNode = new MyNode(data);

    // check if list is empty
    if (!this.head) {
      // make new node the head
      this.head = this.tail = newNode;
    } else {
      // Set the next pointer of the new node to the current head
      newNode.next = this.head;
      // Move the head to point to the new node
      this.head = newNode;
    }

    this.length++;
  }

  private getNodeAt(index: number): MyNode<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) return this.head; // first node
    if (index === this.length - 1) return this.tail; //last node

    // traverse through linked list and return node present at given index
    let counter = 0;
    let current = this.head;
    while (current && counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // insert a node at specific index in the linked list.Time complexity -> O(n)
  public insert(index: number, data: T): boolean {
    // invalid index
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds");
      return false;
    }

    if (index === 0) {
      // insert at the start
      this.prepend(data);
      return true;
    }

    if (index === this.length) {
      // insert at the end
      this.append(data);
      return true;
    }

    // insert at specific index
    // create new node
    const newNode = new MyNode(data);
    // get previous node of a node present at index
    const previousNode = this.getNodeAt(index - 1)!!;

    // point new node to next node of previous node
    newNode.next = previousNode.next;
    // point previous node to new node
    previousNode.next = newNode;
    this.length += 1; // increment length

    return true;
  }

  // remove element from linked list.Time complexity -> O(n)
  public remove(index: number): T | null {
    // invalid index or empty list
    if (index < 0 || index >= this.length || !this.head) {
      console.error("Index out of bounds");
      return null;
    }

    let removeNode: MyNode<T> | null = null;

    if (index === 0) {
      // remove first element
      removeNode = this.head;
      this.head = removeNode.next;

      // if list becomes empty, update the tail
      if (!this.head) {
        this.tail = null;
      }
    } else {
      // remove element from given index
      // get the node before the one we want to remove
      const prevNode = this.getNodeAt(index - 1);
      removeNode = prevNode?.next || null;

      if (prevNode && removeNode) {
        // point previous node to the next node of the node to be removed
        prevNode.next = removeNode.next;

        // update the tail if last node is removed
        if (!prevNode.next) this.tail = prevNode;
      }
    }

    this.length--;
    return removeNode ? removeNode.data : null;
  }

  public reverse() {
    // single node list
    if (!this.head?.next) return this.head;

    // update tail pointer
    this.tail = this.head;

    // swaping node in-place
    let first = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    // update head pointer
    this.head.next = null;
    this.head = first;
  }
}

// -------------- Example usuage -----------------
const myLinkedList = new SinglyLinkedList<number>();

// append to linked list
myLinkedList.append(10);
myLinkedList.printList();

myLinkedList.append(5);
myLinkedList.printList();

myLinkedList.append(16);
myLinkedList.printList();

// add at the start of linked list
myLinkedList.prepend(1);
myLinkedList.printList();

// --- insert in linked list ----
// insert at index-2
console.log("inserting at index-2", myLinkedList.insert(2, 99));
myLinkedList.printList();

// // insert at the start of linked list
// console.log("inserting at the start", myLinkedList.insert(0, 99));
// myLinkedList.printList();

// // insert at the end of linked list
// console.log(
//   "inserting at the end",
//   myLinkedList.insert(myLinkedList.getSize() - 1, 99)
// );
// myLinkedList.printList();

// // insert at the out of index
// console.log(
//   "inserting at index greater than linked list length",
//   myLinkedList.insert(myLinkedList.getSize() + 1, 99)
// );
// myLinkedList.printList();

// ----- remove from linkedlist ---
console.log("linked list length = ", myLinkedList.getSize());
console.log("remove element at index-2 = ", myLinkedList.remove(2));
myLinkedList.printList();
console.log("linked list length = ", myLinkedList.getSize());

// remove from index-2
console.log(
  "remove element with out of bound index = ",
  myLinkedList.remove(10)
);

// reversing existing linked list
console.log("before reversing linked list -> ");
myLinkedList.printList();

myLinkedList.reverse();

console.log("after reversing linked list ->");
myLinkedList.printList();
