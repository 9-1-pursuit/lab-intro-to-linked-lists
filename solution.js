const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
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
  size(){
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

const firstNode = new Node (words[0])
console.log(firstNode)
const linkedList1 = new LinkedList (firstNode)

console.log(linkedList1)

linkedList1.insert(words[1])

console.log(linkedList1)



module.exports = {
  Node,
  LinkedList,
};
