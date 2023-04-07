const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
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
  let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }


// by key
delete(data) {
  let node = this.head;
  let counter = 0;
  while (node.data !== data && node.next) {
    counter++;
    node = node.next;
  }
  let foundNode = node;
  node = this.head;
  for (let i = 1; i < counter; i++) {
    node = node.next;
  }
  node.next = foundNode.next;
}

// element
getFirst(){
  return this.head;
} 

// element
getLast(){
let node = this.head;
if (!this.head) return null;

 while (node.next) {
 node = node.next;
 }
 return node;
}

// an element by key and return data
search(key){
  let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
} 

// retrieve kth element
getKth(k){
  let node = this.head;
  let count = 1;
  while (node !== null && count < k) {
    node = node.next;
    count++;
  }
  return node;
} 

// retrieve kth from last element
getKthToLast(key){
  if (key < 1) return null;
  let p1 = this.head;
  let p2 = this.head;
  for (let i = 0; i < key; i++) {
    if (!p2) {
      return null;
    }
    p2 = p2.next;
  }
  while (p2.next) {
    p2 = p2.next;
    p1 = p1.next;
  }
  return p1;
} 

// check if list is empty
isEmpty(){
  let node = this.head;
  let empty = true
  if (node!==null){empty = false}
  return empty
} 

// the linked list
clear(){
  this.head = null;
} 

// data from linked list to an array
toArray(){
  let arr = []
  let curr = this.head
  while(curr!==null){
    arr.push(curr.data)
    curr=curr.next
  }
  return arr
} 

// check for duplicates - return true if contains duplicates, false if not
containsDuplicates(){
  let node = this.head;
  let arr = [];
  while (node) {
    if (arr.includes(node.data)) {
      return true;
    }
    arr.push(node.data)
    node = node.next;
  }
  return false;
}

}

module.exports = {
  Node,
  LinkedList,
};
