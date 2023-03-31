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

// create linkedlist head
class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // Creating new node at the beginnging of a Linked List. It creates new node with data passed in as argument/parameter.
  // set the head of list to new node if no head exist in the list. Sets the next node of the new node to the current head,

  // insert link list
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

  // size of linked list
  size() {
    let count = 0
    let curr = this.head
    while (curr) {
      count++
      curr = curr.next
    }
    return count
  }

  // delete by key
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

  // getFirst element
  getFirst() {
    return this.head
  }

  // getLast element
  getLast() {
    let curr = this.head
    if (!this.head) return null
    while (curr.next) {
      curr = curr.next
    }
    return curr
  }

  // an element by key and return data
  search(key) {
    let curr = this.head
    while (curr !== null && curr.data !== key) {
      curr = curr.next
    }
    return curr
  }

  // retrieve kth element
  getKth(key) {
    let count = 1
    let curr = this.head
    while (curr < key && count !== key) {
      curr = curr.next
      count++
    }
    return curr
  }

  //retrieve kth from last element
  getKthToLast(key) {
    let count = 1
    let curr = this.head
    let size = this.size() - key

    while (count !== size) {
      curr = curr.next
      count++
    }
    return curr
  }

  // check if list is empty
  isEmpty() {
    return this.head === null
  }

  // clear the linked list
  clear() {
    this.head = null
  }

  // convert data from linked list to an array
  toArray() {
    const arr = []
    let curr = this.head
    while (curr) {
      arr.push(curr.data)
      curr = curr.next
    }

    return arr
  }

  // check for duplicates - return true if contains duplicates, false if not
  containsDuplicates() {
    let curr = this.head
    let set = new Set()
    while (curr !== null) {
      // set.has check for a same value in the Set()
      if (set.has(curr.data)) {
        return true
      }
      // adding the value of the curr node to the Set, so that it can be checked for duplicates
      set.add(curr.data)
      curr = curr.next
    }
    return false
  }
}

module.exports = {
  Node,
  LinkedList,
}
