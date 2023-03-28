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
  
}

const firstNode = new Node (words[0])
const linkedList1 = new LinkedList (firstNode)

words.forEach(word => {
  linkedList1.insert(word)
})

// console.log('linked list head Node:',linkedList1.head)

linkedList1.delete(4)



module.exports = {
  Node,
  LinkedList,
};
