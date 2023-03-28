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
    let foundNode;

    while (node) {
      if (node.data === key) {
        foundNode = node;
        break;
      }
      node = node.next;
    }

    node = this.head;
    while (node) {
      if (node.next === foundNode) {
        node.next = foundNode.next;
        break;
      }
      node = node.next;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        return node;
      }
      node = node.next;
    }
  }
  getKth(val) {
    let node = this.head;
    let count = 1;
    while (val !== count) {
      count++;
      node = node.next;
    }
    return node;
  }
  getKthToLast(val) {
    let node = this.head;
    let length = this.size();
    let count = 1;
    while (length - val > count) {
      count++;
      node = node.next;
    }
    return node;
  }
  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null
  }
}

// const numList = new LinkedList(new Node(nums.at(-1)));
// for (let i = nums.length - 2; i >= 0; i--) {
//   numList.insert(nums[i]);
// }

// const wordsList = new LinkedList(new Node(words.at(-1)));
// for (let i = words.length - 2; i >= 0; i--) {
//   wordsList.insert(words[i]);
// }

// const wordsList = new LinkedList()
// for(let word of words){
//   wordsList.insert(word)
// }

const numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}

console.log(numList.getKth(2));
// console.log(wordsList.getLast());

// console.log(numList.size());
// console.log(wordsList.size());

module.exports = {
  Node,
  LinkedList,
};
