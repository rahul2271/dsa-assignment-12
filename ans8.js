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
  
    // Check if the linked list is circular
    isCircular() {
      if (this.head === null) {
        return false; // Empty list
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; // Cycle detected
        }
      }
  
      return false; // No cycle found
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  
  // Create a cycle by connecting the last node to the second node
  linkedList.head.next.next.next.next = linkedList.head.next;
  
  if (linkedList.isCircular()) {
    console.log('The linked list is circular.');
  } else {
    console.log('The linked list is not circular.');
  }
  