const { nums, words } = require("./data/data.js");

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
  }
  insert(data){
    let newNode = new Node(data)
    if(!this.head) this.head = newNode
    else {
      let current = this.head
      while(current.next) current = current.next
      current.next = newNode
    }
  }
  size(){
    let current = this.head
    let count = 0
    while(current) {
      count++
      current = current.next
    }
    return count
  }
  delete(index){
    let current = this.head
    let count = 0
    let prevNode = null
    if(index === 0) this.head = null
    else {
      while(count < index){
        prevNode = current
        current = current.next
        count++
      }
      prevNode.next = current.next
    }
  }
  // ??? test are switched first === 0 or first === 1?
  getFirst(){
    let current = this.head
    let count = 0
    while(count < 1){
      current = current.next
      count ++
    }
    return current
  }
  getLast(){
    // loop until .next = null
    let current = this.head
    while (current.next){
      current = current.next
    }
    return current 
  }
  search(key){
    let current = this.head
    let count = 0
    while(current.data !== key){
        current = current.next
        count++
    }
    return current
  }
}
const node1 = new Node(1, new Node(2))
const linked1 = new LinkedList(node1)
console.log(linked1)
console.log(linked1.search(1))

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
