class Node {
    constructor(data, next = null){
      this.data = data
      this.next = next
    }
  }

//   INSERT
function insert(data){
    let newNode = new Node(data, this.head)
    this.head = newNode
}
// SIZE
function size(){
    let current = this.head
    let count = 0
    while(current) {
      count++
      current = current.next
    }
    return count
  }
//   DELETE
function deleteNode(key){
    let current = this.head
    let prevNode = null
    while(current.data !== key){
        prevNode = current
        current=current.next
    }
    prevNode.next = current.next
}
// SEARCH
function search(key){
    let current = this.head
    while(current.data !== key){
        current = current.next
    }
    return current
}
// GET FIRST
function getFirst(){
    return this.head
}
//   GET LAST
function  getLast(head = this.head){
    let current = head
    while (current.next){
      current = current.next
    }
    return current 
  }
// GET KTH
function getKth(val, head = this.head){
    let current = head
    let count = 1
    while(count < val){
        current = current.next
        count++
    }
    return current
}
// GET KTHTOLAST 
function getKthToLast(val){
    const length = this.size() 
    const position = length - val
    const valAtPosition = getKth(position, this.head)   
    return valAtPosition
}
// IS EMPTY  
function isEmpty(){
    const length = this.size()
    return length === 0
}
// CLEAR 
function clear(){
    this.head = null
}
// TO ARRAY 
function toArray(head = this.head){
    const last = getLast(head)
    const arr = []
    let current = head
    while(current){
        arr.push(current.data)
        current = current.next
    }
    return arr
}
// DUPLICATES
function containsDuplicates(){
    const arr = toArray(this.head)
    const duplicate = arr.some((el, i, arr) => arr.includes(el, i+1))
    return duplicate
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