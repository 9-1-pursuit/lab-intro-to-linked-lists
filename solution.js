const { inspect } = require('util') 
const { nums, words } = require("./data/data.js");

// node class constructor
class Node {
  constructor(val){
    this.data = val
    this.next = null
  }
}

// linked list class constructor
class LinkedList {
  constructor(head = null){
    this.head = head
  }

  // inserts a newNode as the new head
  insert(data){
    let newNode = new Node(data)

    // if this.head does not exist, the newNode becomes this.head
    if(!this.head){
      this.head = newNode
    // otherwise newNode becomes this.head and the previous head is next after the newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  // returns the length of the linked list
  size(){
    // starting from 0 and counting from this.head,
    let count = 0
    let current = this.head

    // increment the count while current node exists and update current to the next node
    while (current){
      count++
      current = current.next
    }
    // return total count
    return count
  }

  delete(key){
    // starting count from 0 beginning at this.head
    let count = 0
    let current = this.head

    // while the current.data does not match the key and there is a next node
    while(current.data !== kay && current.next){
      // if current.data matches the key, current = null to delete node
      if(current.data === key){
        current = null
      } else {
        //
        current = current.next
      }
    }
  }

  // remove an item by key
  delete(key) {
    // starting count from 0 beginning at this.head
    let count = 0;
    let current = this.head;

    // while the current.data does not match the key and there is a next node
    while (current.data !== key && current.next) {
      // increment the counter for each node and update current node to the next node
      count++;
      current = current.next;
    }
    // while loop stops when current.data === key
    // foundNode is set to the current matching node
    let foundNode = current;

    // reset current to start from this.head
    current = this.head;

    // for loop starts at 1 and moves to the next node, stopping before the foundNode
    for (let i = 1; i < count; i++) {
      current = current.next;
    }
    // current.next before the foundNode points to foundNode.next to skip foundNode
    current.next = foundNode.next;
  }

  // get the first element of the linked list
  getFirst(){
    return this.head
  }

  // get the last element of the linked list
  getLast(){
    // start from this.head
    let current = this.head
    // while a next node exists, update current to the next node
    while(current.next){
      current = current.next
    }
    // return current when the while loop breaks on the last node
    return current
  }

  // search an element by key and return data
  search(key) {
    // start from this.head
    let current = this.head;

    while (current && current.data !== key) {
      current = current.next;
    }
    return current;
  }

  // get kth element
  getKth (k){
    // start from this.head
    let current = this.head
    // starting from 1 and looping until k, go to the next node for each iteration
    for (let i = 1; i < k; i++){
      current = current.next
    }
    // return current as the kth element
    return current
  }

  // get kth element from the end
  getKthToLast (k){
    // use size method to calculate position for kth to last
    let position = this.size() - k

    // starting from this.head
    let current = this.head
    // start from 1 and for each iteration where i is < position of kth to last, go to the next node
    for (let i = 1; i < position; i++){
      current = current.next
    }
    // return new current at kth to last element
    return current
  }

  // checks if list is empty and returns a boolean
  isEmpty(){
    // if this.head exists, return false. Else return true
    return !this.head
  }

  // clear the list by making the head null
  clear(){
    this.head = null
  }

  // convert data from a linked list to an array
  toArray(){
    // declare arr variable to store data
    let arr = []
    // start from this.head and iterate up to this.size
    let current = this.head
    for(let i = 0; i < this.size(); i++){
      // for each current node, push current.data to the array and move on to the next node
      arr.push(current.data)
      current = current.next
    }
    // return the array
    return arr
  }

  // checks for duplicates and returns a boolean (true if contains duplicstes, else false)
  containsDuplicates(){
    // start from this.head and the value for current.data
    let current = this.head
    let val = current.data

    // loop through each element
    for (let i = 1; i < this.size(); i++){
      // if current.data exists, set the val as current.data for each iteration
      if (current.data) {
        val = current.data

        // begin searching for a matching element starting with current.next
        current = current.next

        // while(current.data !== val && current.next){
        //   current = current.next
        //   res = false
        //   console.log('val', val)
        //   console.log('current', current)
        // }

        // while current exists, check if current.data equals val 
        while(current){
          if(current.data === val) return true
          current = current.next
        }

        // if (current.data === val) return true
        // current = current.next
      }
      return false
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
