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
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(key) {
    let node = this.head;
    let counter = 0;
    while (node.data !== key && node.next) {
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
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
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

  getKth(k) {
    let node = this.head;
    while (k > 1) {
      node = node.next;
      k--;
    }
    return node;
  }

  getKthToLast(k) {
    k = this.size() - k;
    let node = this.head;
    while (k > 1) {
      node = node.next;
      k--;
    }
    return node;
  }

  isEmpty() {
    let node = this.head;
    if (node === null) return true;
    else return false;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let array = [];
    let node = this.head;
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }

  containsDuplicates() {
    let array = this.toArray();
    let uniqueArray = [...new Set(array)];

    if (array.length === uniqueArray.length) return false;
    else return true;
  }
}

module.exports = {
  Node,
  LinkedList,
};
