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
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  size(){
    let  count = 0
     let node = this.head
     while(node){
         count++
         node = node.next
     }

     return count
 }

 delete(key) {
  if (this.head === null) {
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let currentNode = this.head;
  let previousNode = null;

  while (currentNode !== null && currentNode.data !== key) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (currentNode === null) {
    return;
  }

  previousNode.next = currentNode.next;
}


getLast() {
  return this.head;
}



getFirst() {
  let node = this.head;
  if (!this.head) return null;
  while (node.next) {
  node = node.next;
  }
  return node;
}

search(key) {
  let currentNode = this.head;

  while (currentNode !== null) {
    if (currentNode.data === key) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}

getKth(k) {
  if (k < 1 || !this.head) {
    return null;
  }

  let currentNode = this.head;
  for (let i = 1; i < k && currentNode !== null; i++) {
    currentNode = currentNode.next;
  }

  if (currentNode === null) {
    return null;
  }

  return currentNode.data;
}

getKthToLast(k) {
  if (k < 1 || !this.head) {
    return null;
  }

  let slowPointer = this.head;
  let fastPointer = this.head;

  // move the fast pointer k nodes from the head node
  for (let i = 0; i < k; i++) {
    if (fastPointer === null) {
      return null;
    }
    fastPointer = fastPointer.next;
  }

  // move both pointers simultaneously until the fast pointer reaches the end of the linked list
  while (fastPointer !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  // at this point, the slow pointer is pointing at the kth element from the end of the linked list
  return slowPointer.data;
}



isEmpty() {
  return this.head === null;
}

clear(){
  this.head = null
}


toArray() {
  const array = [];
  let currentNode = this.head;
  while (currentNode) {
    array.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return array;
}

containsDuplicates() {
  let seenValues = new Set();
  let currentNode = this.head;

  while (currentNode !== null) {
    if (seenValues.has(currentNode.data)) {
      return true;
    } else {
      seenValues.add(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  return false;
}
}



module.exports = {
  Node,
  LinkedList,
};
