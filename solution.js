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
  size(){
    let count = 0 
    let node = this.head
    while(node){
      count++
     node = node.next

    }
    return count
    
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
