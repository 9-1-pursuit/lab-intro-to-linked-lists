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
  isEmpty(){
    if(!this.head){
      return true
    } else {
      return false
    }
  }
  clear(){
    console.log('clear method',this.head)
    let currentEl = this.head;
    this.head = null
    console.log('clear method after null',this.head)

  }
  toArray(){

    // start at head node, take data append to array,
    //  repeat until no nodes exist / end of list
    let outputArr = []
    let i = 0
    let currentEl = this.head
    
    while(currentEl){
      console.log(`iteration num ${i}`,currentEl.data)
      let num = currentEl.data
      console.log(num)
      outputArr.push(num)
      // outputArr.push(currentEl.data)
      i++
      currentEl = currentEl.next
    } 
    // console.log(outputArr)
    console.log(outputArr)
    return outputArr
  }

  containsDuplicates() {
    // use a set to keep track of unique elements
    const uniqueSet = new Set();
    let currentEl = this.head;
    while (currentEl) {
      if (uniqueSet.has(currentEl.data)) {
        return true;
      }
      uniqueSet.add(currentEl.data);
      currentEl = currentEl.next;
    }
    return false;
  }

  
  /*
[
  0, 10, 9, 8, 7,
  6,  5, 4, 3, 2,
  1,  1
]
  */
  
}

const firstNode = new Node (nums[0])
const linkedList1 = new LinkedList (firstNode)

nums.forEach(num => {
  linkedList1.insert(num)
})

// console.log('linked list head Node:',linkedList1.head)

// linkedList1.delete(4)
// console.log(linkedList1.getFirst())
console.log(linkedList1.toArray())


module.exports = {
  Node,
  LinkedList,
};
