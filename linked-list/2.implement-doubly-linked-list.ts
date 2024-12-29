class Mynode<T> {
  data: T;
  prev: Mynode<T> | null = null; // reference to previous node
  next: Mynode<T> | null = null; // reference to next node

  constructor(data: T) {
    this.data = data;
  }
}

class DoublyLinkedList<T> {
  private head: Mynode<T> | null = null;
  private tail: Mynode<T> | null = null;
  private length: number = 0;

  public getSize(): number {
    return this.length;
  }

  public printList() {
    const forwardResult: T[] = [];
    let current = this.head;
    while (current) {
      forwardResult.push(current.data);
      current = current.next;
    }

    console.log("=================");
    console.log("Forward traverse =", forwardResult.join(" -> "));

    const backwardResult: T[] = [];
    current = this.tail;

    while (current) {
      backwardResult.push(current.data);
      current = current.prev;
    }

    console.log("Backward traverse =", backwardResult.join(" -> "));
    console.log("=================\n");
  }

  // Add a node at the end of the list.Time complexity -> O(1)
  public append(data: T) {
    // create new node
    const newNode = new Mynode<T>(data);

    // check if list is empty
    if (!this.head) {
      // make new node the head
      this.head = this.tail = newNode;
    } else {
      // set the next pointer of tail node to the new node
      this.tail!.next = newNode;
      // set the prev pointer of new node to the tail node
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a node at the beginning of the list. Time complexity -> O(1)
  public prepend(data: T) {
    // create new node
    const newNode = new Mynode<T>(data);

    // check if list is empty
    if (!this.head) {
      // make new node the head
      this.head = this.tail = newNode;
    } else {
      // Set the next pointer of the new node to the current head
      newNode.next = this.head;
      // Set prev pointer of head node to new node
      this.head.prev = newNode;
      // Move the head to point to the new node
      this.head = newNode;
    }

    this.length++;
  }

  private getNodeAt(index: number): Mynode<T> | null {
    // invalid index
    if (index < 0 || index >= this.length) {
      console.error("Index Out of bound");
      return null;
    }

    let current: Mynode<T> | null;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current!.prev;
      }
    }
    return current;
  }

  // insert a node at specific index in the linked list.Time complexity -> O(n)
  public insert(index: number, data: T): boolean {
    // invalid index
    if (index < 0 || index > this.length) {
      console.error("Index Out of bound");
      return false;
    }

    if (index === 0) {
      //insert at the start
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
    const newNode = new Mynode<T>(data);

    // get the node and it's previous node at the given index
    const prevNode = this.getNodeAt(index - 1)!;
    const nextNode = prevNode.next;

    // // set next pointer of new node and previous node
    newNode.next = nextNode;
    prevNode.next = newNode;

    // set prev pointer
    newNode.prev = prevNode;
    if (nextNode) nextNode.prev = newNode;

    this.length++;
    return true;
  }

  //   To remove node from specific indec. Time complexity -> O(n)
  public remove(index: number): T | null {
    // invalid index or empty list check
    if (index < 0 || index >= this.length || !this.head) {
      console.error("Index Out Of bound or Empty List");
      return null;
    }

    let removeNode: Mynode<T> | null = null;
    if (index === 0) {
      // remove first node
      removeNode = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null; // update the tail, if list becomes empty
    } else {
      // remove node from specific index
      // get previous node of given index
      const prevNode = this.getNodeAt(index - 1)!;
      removeNode = prevNode.next;

      // unlink node to remove from linked list
      if (removeNode) {
        prevNode.next = removeNode.next;
        if (removeNode.next) removeNode.next.prev = prevNode;

        // update the tail if last node is removed
        if (!prevNode.next) this.tail = prevNode;
      }
    }

    this.length--;
    return removeNode ? removeNode.data : null;
  }
}

// example usage
const myDoublyLinkedList = new DoublyLinkedList();
console.log(myDoublyLinkedList.getSize());

// append at the end of list
// console.log(myDoublyLinkedList.append(10));
// console.log(myDoublyLinkedList.append(5));

myDoublyLinkedList.append(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
console.log("after appending 10, 5, 16 at the end");
myDoublyLinkedList.printList();

// prepend at the start of list
myDoublyLinkedList.prepend(1);
console.log("after prepending 1 at the start");
myDoublyLinkedList.printList();
console.log(myDoublyLinkedList.getSize());

// inserting in specific index of list
// myDoublyLinkedList.insert(-1, 99);
// myDoublyLinkedList.insert(10, 99);

// // inserting at the start of list
// console.log(myDoublyLinkedList.insert(0, 99));
// myDoublyLinkedList.printList();

// // inserting at the end of list
// console.log(myDoublyLinkedList.insert(myDoublyLinkedList.getSize(), 99));
// myDoublyLinkedList.printList();

// inserting at index-2
console.log("inserting at index-2");
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.printList();

// ----- removing node
// myDoublyLinkedList.remove(-1);
// myDoublyLinkedList.remove(10);

// remove from start of list
console.log("remove first node");
myDoublyLinkedList.remove(0);
myDoublyLinkedList.printList();

// remove from index-2
console.log("remove node present at index-2");
myDoublyLinkedList.remove(2);
myDoublyLinkedList.printList();
