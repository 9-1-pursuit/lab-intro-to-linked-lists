const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(data) {
    if (!this.head) {
      return null;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return this.head;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return null;
    }

    prev.next = current.next;
    return this.head;
  }

  getFirst() {
    return this.head 
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    if (!this.head) return null;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  search(data) {
    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }
    return current 
  }

  getKth(k) {
    let current = this.head;
    let count = 1;
    while (current && count < k) {
      current = current.next;
      count++;
    }
    return current 
  }

  getKthToLast(k) {
    if (k < 1) return null;
      let p1 = this.head;
      let p2 = this.head;
      for (let i = 0; i < k; i++) {
        if (!p2) return null; 
        p2 = p2.next;
      }
      while (p2.next) {
        p2 = p2.next;
        p1 = p1.next;
      }
      return p1;
    }
  

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  containsDuplicates() {
    const set = new Set();
    let current = this.head;
    while (current) {
      if (set.has(current.data)) {
        return true;
      }
      set.add(current.data);
      current = current.next;
    }
    return false;
  }
}


module.exports = {
  Node,
  LinkedList,
};
