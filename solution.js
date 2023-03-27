const { nums, words } = require("./data/data.js");
const { 
  insert, 
  size, 
  deleteNode, 
  search, 
  getFirst, 
  getLast, 
  getKth,
  getKthToLast,
  isEmpty,
  clear,
  toArray,
  containsDuplicates
 } = require("./functionNotes")

// Create a Node class with properties
class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

// Create a linked list with properties
class LinkedList {
  constructor(head = null){
    this.head = head 
    this.size = size
    this.insert= insert
    this.search = search
    this.delete = deleteNode
    this.getFirst = getFirst
    this.getLast = getLast
    this.getKth = getKth
    this.getKthToLast = getKthToLast
    this.isEmpty = isEmpty
    this.clear = clear
    this.toArray = toArray
    this.containsDuplicates = containsDuplicates
  }
 
}
const newNode = new LinkedList();
for (let num of nums) {
  newNode.insert(num);
}
console.log(newNode.toArray())
/* 
  [
  0, 10, 9, 8, 7,
  6,  5, 4, 3, 2,
  1
]
*/ 

module.exports = {
  Node,
  LinkedList,
};

