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
  
    // Check if the linked list is a palindrome
    isPalindrome() {
      if (this.head === null) {
        return true; // Empty list is considered a palindrome
      }
  
      // Find the middle of the linked list using the two-pointer approach
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      // Reverse the second half of the linked list
      let prev = null;
      let current = slow;
      while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      // Compare the first half and reversed second half of the linked list
      let firstHalf = this.head;
      let secondHalf = prev;
      while (secondHalf !== null) {
        if (firstHalf.data !== secondHalf.data) {
          return false; // Not a palindrome
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
      }
  
      return true; // Linked list is a palindrome
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert('r');
  linkedList.insert('a');
  linkedList.insert('d');
  linkedList.insert('a');
  linkedList.insert('r');
  
  console.log(linkedList.isPalindrome()); // Output: true
  