// const { Node } = require("./solution.js");

class Node {
    constructor(data, next = null){
      this.data = data
      this.next = next
    }
  }
  
// INSERT (adds to the tail)
/* function insert(data){
    // create a new node with given data
    let newNode = new Node(data)
    // if linked list is empty (head = null), set the newNode to the head
    if(!this.head) this.head = newNode
    else {
        // initiate current as the head node, and when loop get to tail node (.next = null) set the tail.next to the newNode (add to end of list) 
      let current = this.head
      while(current.next){
        // up until .next = null (the last (tail) node)
        current = current.next
      }
      current.next = newNode
    }
  } */

//   INSERT ALT. (sets new value as the head, the current head, becomes the .next)
function insert(data){
    let newNode = new Node(data, this.head)
    this.head = newNode
}


// SIZE
  function size(){
    // start at the head count is 0 
    let current = this.head
    let count = 0
    while(current) {
      count++
    //   update current to the next node , if current.next is null (tail), return count
      current = current.next
    }
    return count
  }

//   DELETE this deletes at given index value
// function deleteNode(index){
//     let current = this.head
//     let count = 0
//     /* 
//     if delete at index 2
//       store previous and current.next nodes (prev = 1, curr.next =3)
//       when index = count (prev.next = curr.next, 1.next = 3)
//       */
//     let prevNode = null
//     // if index = 0, head, set head to null
//     if(index === 0) this.head = null
//     else {
//       while(count < index){
//         // up until index
//         prevNode = current
//         current = current.next
//         count++
//       }
//       prevNode.next = current.next
//     }
//   }

// DELETE deletes where the node data key === inputted key value
function deleteNode(key){
    let current = this.head
    let prevNode = null
    while(current.data !== key){
        prevNode = current
        current=current.next
    }
    prevNode.next = current.next
}

//   SEARCH search an element by key (value of data key) and return node
function search(key){
    // loop until .data = key value and return that node
    let current = this.head
    // in case in future want to know position value was found at
    let count = 0
    while(current.data !== key){
        current = current.next
        count++
    }
    return current
}

// GET FIRST
 // ??? test are switched first === 0 or first === 1?
//   if first == 0 jus return head
 function getFirst(){
    return this.head
    // let current = this.head
    // let count = 0
    // while(count < 1){
    //   current = current.next
    //   count ++
    // }
    // return current
  }

//   GET LAST
function  getLast(head = this.head){
    // loop until .next = null
    let current = head
    while (current.next){
      current = current.next
    }
    return current 
  }

//    GET KTH retrieve kth (position -> index + 1) element
function getKth(val, head = this.head){
    let current = head
    let count = 1
    while(count < val){
        // update current value to the .next (next node obj)
        current = current.next
        count++
        // console.log(count, current)
        // current = current.next
    }
    // when count = index, return that node (current)
    return current
}

// GET KTHTOLAST  retrieve kth from last element
function getKthToLast(val){
    // get size/ length (-1) of list, subtract val from it
    const length = this.size() 
    const position = length - val
    const valAtPosition = getKth(position, this.head)   
    return valAtPosition
}

// IS EMPTY  check if list is empty
function isEmpty(){
    const length = this.size()
    return length === 0
}

// CLEAR clear the linked list
function clear(){
    this.head = null
}

// TO ARRAY convert data from linked list to an array
function toArray(head = this.head){
    const last = getLast(head)
    console.log("last", last)
    const arr = []
    let current = head

    while(current){
        arr.push(current.data)
        current = current.next
    }
    return arr
}

// DUPLICATES check for duplicates - return true if contains duplicates, false if not
function containsDuplicates(){
    const arr = toArray(this.head)
    console.log(arr)
}

  module.exports = {
    insert,
    size,
    deleteNode,
    search,
    getFirst, 
    getLast,
    getKth,
    getKthToLast,
    isEmpty,
    clear,
    toArray,
    containsDuplicates,

  }
// module.exports = {
//     insert : insert,
//     size : size,
//     deleteNode : deleteNode,
//     search : search,
//     getFirst : getFirst,
//     getLast : getLast,
// }