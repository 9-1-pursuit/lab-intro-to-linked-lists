const { nums, words } = require("./data/data.js");

const { inspect } = require("util");

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
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  search(data, target) {
    // Initialize current
    let current = this.head;

    while (currentNode !== null) {
      if (currentNode.data === target)
        // Data found
        return data;
      currentNode = currentNode.next;
    }

    // Data not found
    return false;
  }
  search(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.data === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  isEmpty() {
    return this.head === null;
  }

  getKth(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode !== null) {
      count++;
      if (count === index) {
        break;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKthToLast(index) {
    let node = this.size();
    // let currentNode = this.head;
    // while (currentNode.next !== null) {
    //   currentNode = currentNode.next;
    //   if (currentNode.next === null) {
    //     let lastNode = currentNode;
    //     while () {
    //     }
    //   }
    // }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return arr;
  }

  containsDuplicates() {
    let dupArr = this.toArray();
    const map = new Map();
    let dupBool = false;
    for (let i = 0; i < dupArr.length; i++) {
      if (!map.has(dupArr[i])) map.set(dupArr[i], 1);
      else {
        map.set(dupArr[i], map.get(dupArr[i]) + 1);
      }
    }
    for (let [key, value] of map) {
      if (value > 1) dupBool = true;
    }
    return dupBool;
  }

  getKthToLast(index) {
    let counter = 0;
    let node = this.head;
    let nodeCount = this.size();

    while (node) {
      node = node.next;
      counter++;
      if (counter === nodeCount - index - 1) {
        break;
      }
    }
    return node;
  }

  // containsDuplicates() {
  //   let node = this.head;
  //   let newArray = [];
  //   do {
  //     newArray.push(node.data);
  //     node = node.next;
  //   } while (node !== null);
  //   let counter = 0;
  //   for (let arr of newArray) {
  //     let index = 0;
  //     if (arr === arr[index]) {
  //       counter++;
  //     }
  //     index++;
  //   }
  //   if (counter > 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

// this will be the lists' head
let currentNode = new Node(nums[0]);
// instantiating new linked list class with currentNode as the head
let newList = new LinkedList(currentNode);
//loop to create the new nodes of the lists -- start at 1 since we set the head to be the array at 0
for (let i = 1; i < nums.length; i++) {
  //this will instantiate a new Node class object with nums[i] as the value
  let followingNode = new Node(nums[i]);
  // updates the pointer for the current node to point to the new followingNode node
  currentNode.next = followingNode;
  // assigns the new following node to the current node. essentially moves the head to the next node that was just created with a followingNode variable name
  currentNode = followingNode;
}

// console.log(nums);
// console.log(inspect(newList, { showHidden: true, colors: true, depth: 12 }));

module.exports = {
  Node,
  LinkedList,
};
