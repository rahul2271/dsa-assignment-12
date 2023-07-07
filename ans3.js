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
  
    // Find the Nth node from the end of the linked list
    findNthNodeFromEnd(n) {
      if (this.head === null) {
        return null; // Empty list
      }
  
      let slow = this.head;
      let fast = this.head;
  
      // Move the fast pointer n nodes ahead of the slow pointer
      for (let i = 0; i < n; i++) {
        if (fast === null) {
          return null; // N is greater than the number of nodes in the list
        }
        fast = fast.next;
      }
  
      // Move both pointers simultaneously until the fast pointer reaches the end
      while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }
  
      return slow.data; // Return the data of the Nth node from the end
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(5);
  
  console.log(linkedList.findNthNodeFromEnd(2)); // Output: 4
  console.log(linkedList.findNthNodeFromEnd(5)); // Output: 1
  