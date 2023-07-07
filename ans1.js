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
  
    // Delete the middle node(s) of the linked list
    deleteMiddle() {
      if (this.head === null || this.head.next === null) {
        return null; // No nodes or only one node in the list
      }
  
      let slow = this.head;
      let fast = this.head;
      let prev = null;
  
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
      }
  
      prev.next = slow.next; // Skip the middle node
  
      return this.head;
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
  
  console.log('Before deletion:');
  linkedList.printList();
  
  linkedList.deleteMiddle();
  
  console.log('After deletion:');
  linkedList.printList();
  