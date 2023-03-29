const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // INSERT
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // SIZE
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    } 
    return count;
  }

  // GET FIRST
  getFirst() {
    return this.head;
  }

  // GET LAST
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;

    while (node.next) {
      node = node.next;
    }
    return node;
  }

  // CLEAR
  clear() {
    this.head = null;
  }

  // SEARCH
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  // IS LIST EMPTY
  isEmpty() {
    return this.head === null;
  }

  // GET Kth
  getKth(key) {
    let index = 1;
    let node = this.head;
    while (index < key && node !== null) {
      node = node.next;
      index++;
    }
    return node;
  } 

  // LAST FROM Kth
  getKthToLast(key) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < key; i++) {
      if (fast !== null) {
        fast = fast.next;
      }
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }


  // LINK TO ARRAY
  toArray() {
    let arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.data);
      node = node.next;
    }

    return arr;
  }

  // DUPLICATES
  containsDuplicates() {
    let arr = [];
    let node = this.head;

    while (node) {
      if (arr.includes(node.data)) {
        return true;
      } else {
        arr.push(node.data);
        node = node.next;
      }
    }
      return false;
  }

}

// DELETE
LinkedList.prototype.delete = function (data) {
  let node = this.head;
  let counter = 0;
  while (node.data !== data && node.next) {
    counter++;
    node = node.next;
  }
  let foundNode = node;
  node = this.head;
  for (let i = 1; i < counter; i++) {
    node = node.next;
  }
  node.next = foundNode.next;
};




module.exports = {
  Node,
  LinkedList,
};
