const { nums, words } = require("./data/data.js");
// const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.head !== null) {
      newNode.next = this.head;
    }

    this.head = newNode;
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

  getKth(key) {
    let node = this.head;
    for (let i = 0; i < key; i++) {
      return node;
    }
  }

  getKthToLast(key) {
    let nodeNum = this.size() - key;
    let node = this.head;
    let count = 1;
    while (node) {
      if (count === nodeNum) {
        return node;
      }
      count++;
      node = node.next;
    }
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  clear() {
    this.head = null;
  }
  // when I adjusted the test it would not pass so i left it the same.
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
    let node = this.head;
    let obj = {};
    while (node) {
      if (obj[node.data]) {
        return true;
      }
      obj[node.data] = node.data;
      node = node.next;
    }
    return false;
  }
}

// let myLinkedList = new LinkedList(1);
// myLinkedList.insert(2);
// console.log(myLinkedList.size());

module.exports = {
  Node,
  LinkedList,
};
