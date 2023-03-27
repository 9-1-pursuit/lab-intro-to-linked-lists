const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// define linkList with the head property ...
class LinkedList {
  constructor() {
    this.head = null;
  }
  // insert
  insert(data) {
    let nodeOne = new Node(data); // create an instance => new node
    if (!this.head) {
      this.head = nodeOne;
    } else {
      nodeOne.next = this.head;
      this.head = nodeOne;
    }
  }
  // Count
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
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let node = this.head; //current
    while (node.next) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head; //current
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  getKth(key) {
    //current
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
    let p1 = this.head;
    let p2 = this.head;
    for (let i = 0; i < key; i++) {
      if (!p2) {
        return null;
      }
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
    this.head === null;
  }
}

module.exports = {
  Node,
  LinkedList,
};
