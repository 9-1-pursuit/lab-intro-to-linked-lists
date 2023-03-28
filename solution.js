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
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
  delete(keyToDel) {
    console.log('finding key number', keyToDel)
    let key = 0
    let currentEl = this.head;
    let prevEl = null 
    while (currentEl) { 
      console.log('the current element (key #', key, ') is:\n', currentEl, '\n')
      if (keyToDel === key) {
        console.log('this is a match!')
        if (prevEl) {
          prevEl.next = currentEl.next
        } else {
          this.head = currentEl.next
        }
        return true
      }
      prevEl = currentEl
      currentEl = currentEl.next
      key++
    }
    return false;
  }
  getFirst() {
    return this.head
  }

  getLast() {
    let currentEl = this.head;
    while (currentEl && currentEl.next) { // change the condition to check currentEl.next
      currentEl = currentEl.next;
    }
    return currentEl; // return the last element, which could be the head if there's only one element
  }
  search(keyToFind) {
    console.log('finding key number', keyToFind)
    let key = 0
    let currentEl = this.head;
    while (currentEl.data !== keyToFind) { 
      // console.log('the current element (key #', key, ') is:\n', currentEl, '\n')
      currentEl = currentEl.next
      key++
    }
    return currentEl
  }

  getKth(number){
    let currentEl = this.head
    let count = 1
    while (count < number){
      count++
      currentEl = currentEl.next
    }
    return currentEl
  }

  getKthToLast(number){
    const length = this.size() + 1
    const ourPos = length - number
    const output = this.getKth(ourPos)
    return output
  }
  
  
}

const firstNode = new Node (nums[0])
const linkedList1 = new LinkedList (firstNode)

nums.forEach(num => {
  linkedList1.insert(num)
})

// console.log('linked list head Node:',linkedList1.head)

// linkedList1.delete(4)
console.log(linkedList1.getFirst())



module.exports = {
  Node,
  LinkedList,
};
