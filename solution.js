const { nums, words } = require("./data/data.js");
const { 
  insert, 
  size, 
  deleteNode, 
  search, 
  getFirst, 
  getLast, 
  getKth,
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
  }
 
}

module.exports = {
  Node,
  LinkedList,
};

