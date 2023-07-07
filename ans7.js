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
  
    // Merge the second linked list into alternate positions of the first linked list
    mergeAlternatePositions(secondList) {
      if (this.head === null || secondList.head === null) {
        return; // Empty lists
      }
  
      let firstCurrent = this.head;
      let secondCurrent = secondList.head;
      let firstNext = null;
      let secondNext = null;
  
      while (firstCurrent !== null && secondCurrent !== null) {
        firstNext = firstCurrent.next; // Store the next node of the first list
        secondNext = secondCurrent.next; // Store the next node of the second list
  
        // Link the current node of the second list to the next node of the first list
        firstCurrent.next = secondCurrent;
        secondCurrent.next = firstNext;
  
        // Move the pointers forward
        firstCurrent = firstNext;
        secondCurrent = secondNext;
      }
  
      secondList.head = null; // Empty the second list
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
  const firstList = new LinkedList();
  firstList.insert(5);
  firstList.insert(7);
  firstList.insert(17);
  firstList.insert(13);
  firstList.insert(11);
  
  const secondList = new LinkedList();
  secondList.insert(12);
  secondList.insert(10);
  secondList.insert(2);
  secondList.insert(4);
  secondList.insert(6);
  
  console.log('Before merging alternate positions:');
  console.log('First List:');
  firstList.printList();
  console.log('Second List:');
  secondList.printList();
  
  firstList.mergeAlternatePositions(secondList);
  
  console.log('After merging alternate positions:');
  console.log('First List:');
  firstList.printList();
  console.log('Second List:');
  secondList.printList();
  