const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
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

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
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

  toArray() {
    let array = [];
    let node = this.head;
    while (node) {
      array.push(node.data);
      node += node.next;
    }
    return array;
  }

}

// const wordList = new LinkedList(wordNode);
// console.log(wordList);

module.exports = {
  Node,
  LinkedList,
};
