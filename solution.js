const { nums, words } = require("./data/data.js");

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


  insert(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    let count = 0;
    while (node.data !== data && node.next) {
      count++;
      node = node.next;
    }
    let newNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = newNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(key) {
    let node = this.head;
    let count = 1;
    while (node !== null && count < key) {
      node = node.next;
      count++;
    }
    return node;
  }

  getKthToLast(key) {
    if (key < 1) return null;
    let pointer = this.head;
    let pointer2 = this.head;
    for (let i = 0; i < key; i++) {
      if (!pointer2) {
        return null;
      }
      pointer2 = pointer2.next;
    }
    while (pointer2.next) {
      pointer2 = pointer2.next;
      pointer = pointer.next;
    }
    return pointer;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

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

module.exports = {
  Node,
  LinkedList,
};
