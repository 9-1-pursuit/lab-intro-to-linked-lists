const { nums, words } = require("./data/data.js")

// Creating class called Node. The constructor for the Node takes in parameter of data
// which is assigned to data property of Node. The next property of Node is set to null by default.
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// creating class called LinkedList with constructor function that takes node as argument.
// The constructor sets the head node of the LinkedList to the argument passed in(or null if no arguments is passed in.)
class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // Creating new node at the beginnging of a Linked List. It creates new node with data passed in as argument/parameter.
  // set the head of list to new node if no head exist in the list. Sets the next node of the new node to the current head,

  insert(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }
  // function that counts the number of nodes in a linked list.
  // declaring a count variable and setting it to 0.
  // declare a variable to store the current node and sets it to the head of the list.
  // while loop will iterate thru each node in the list.
  // increments the count variable by one for each node and then sets the current node to the next node in the list.
  // When loop ends, the function returns the count variable, which is the number of nodes in the list.

  size() {
    let count = 0
    let curr = this.head
    while (curr) {
      count++
      curr = curr.next
    }
    return count
  }

  delete(data) {
    let curr = this.head
    let count = 0
    while (curr.data !== data && curr.next) {
      count++
      curr = curr.next
    }
    let foundNode = curr
    curr = this.head
    for (let i = 1; i < count; i++) {
      curr = curr.next
    }
    curr.next = foundNode.next
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let curr = this.head
    if (!this.head) return null
    while (curr.next) {
      curr = curr.next
    }
    return curr
  }

  search(key) {
    let curr = this.head
    while (curr !== null && curr.data !== key) {
      curr = curr.next
    }
    return curr
  }

  getKth(key) {
    let count = 1
    let curr = this.head
    while (curr < key) {
      curr = curr.next
      count++
    }
    return curr
  }

  getKthToLast() {}

  isEmpty() {
    return this.head === null
  }

  clear() {
    this.head = null
  }

  toArray() {
    let curr = this.head
    let arr = []
    while (curr) {
      arr.push(curr.data)
      curr = curr.next
    }
    return arr
  }

  containsDuplicates() {
    let curr = this.head
    let set = new Set()
    while (curr) {
      // set.has check for a same value in the Set()
      if (set.has(curr.data)) {
        return true
      }
      curr = curr.next
    }
    return false
  }
}

module.exports = {
  Node,
  LinkedList,
}
