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
  
    // Remove the loop from the linked list, if present
    removeLoop() {
      if (this.head === null || this.head.next === null) {
        return; // No loop or only one node in the list
      }
  
      let slow = this.head;
      let fast = this.head;
  
      // Find the meeting point of the two pointers (detect loop)
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          break; // Loop detected
        }
      }
  
      if (slow !== fast) {
        return; // No loop found
      }
  
      // Move one pointer to the head and keep the other at the meeting point
      slow = this.head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
  
      // Unlink the last node (remove the loop)
      fast.next = null;
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
  
  // Create a loop by connecting the last node to the second node
  linkedList.head.next.next.next.next = linkedList.head.next;
  
  console.log('Before removing loop:');
  linkedList.printList();
  
  linkedList.removeLoop();
  
  console.log('After removing loop:');
  linkedList.printList();
  