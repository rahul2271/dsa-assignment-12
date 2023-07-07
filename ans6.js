class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a node at the end of the linked list
    insert(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Traverse the linked list and retain M nodes while deleting N nodes
    traverseAndDelete(M, N) {
      if (this.head === null || M <= 0 || N <= 0) {
        return; // Invalid input or empty list
      }
  
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        // Traverse M nodes
        for (let i = 1; i < M && current !== null; i++) {
          current = current.next;
        }
  
        if (current === null) {
          return; // Reached the end of the list
        }
  
        // Delete N nodes
        for (let i = 0; i < N && current !== null; i++) {
          let nextNode = current.next;
          current = nextNode;
        }
  
        // Connect the previous node to the current node
        if (previous !== null) {
          previous.next = current;
        } else {
          this.head = current; // Update the head if the first M nodes were deleted
        }
      }
    }
  
    // Print the linked list
    printList() {
      let current = this.head;
      let result = '';
      while (current !== null) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(5);
  linkedList.insert(6);
  linkedList.insert(7);
  linkedList.insert(8);
  linkedList.insert(9);
  linkedList.insert(10);
  
  console.log('Before traversal and deletion:');
  linkedList.printList();
  
  linkedList.traverseAndDelete(2, 3);
  
  console.log('After traversal and deletion:');
  linkedList.printList();
  