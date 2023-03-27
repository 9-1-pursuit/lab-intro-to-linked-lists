const { nums, words } = require("./data/data.js");
const { insert, size, deleteNode, search, getFirst, getLast } = require("./functionNotes")
// Create a Node class with properties
class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

// // Create a linked list with properties
class LinkedList {
  constructor(head = null){
    this.head = head 
    this.size = size
    this.insert= insert
    this.search = search
    this.delete = deleteNode
    this.getFirst = getFirst
    this.getLast = getLast
  }
 
}
// const node1 = new Node(1, new Node(2))
// const linked1 = new LinkedList(node1)
// console.log(linked1)
// console.log(linked1.search(1))

module.exports = {
  Node,
  LinkedList,
};


/* 
  insert
size
delete by key
getFirst element
getLast element
search an element by key and return data
getKth retrieve kth element
getKthToLast retrieve kth from last element
isEmpty check if list is empty
clear the linked list
toArrayconvert data from linked list to an array
containsDuplicates check for duplicates - return true if contains duplicates, false if not
*/
