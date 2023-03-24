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
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
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

  deleteByKey(key) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === key) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.data === key) {
        prev.next = current.next;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  search(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  getKth(k) {
    let current = this.head;
    let count = 1;
    while (current && count < k) {
      current = current.next;
      count++;
    }
    return current ? current.data : null;
  }

  getKthToLast(k) {
    let current = this.head;
    let runner = this.head;
    let count = 1;
    while (runner && count < k) {
      runner = runner.next;
      count++;
    }
    if (!runner) {
      return null;
    }
    while (runner.next) {
      current = current.next;
      runner = runner.next;
    }
    return current.data;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
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
