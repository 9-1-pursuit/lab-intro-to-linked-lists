// INSERT
function insert(data){
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

//   DELETE
function deleteNode(index){
    let current = this.head
    let count = 0
    /* 
    if delete at index 2
      store previous and current.next nodes (prev = 1, curr.next =3)
      when index = count (prev.next = curr.next, 1.next = 3)
      */
    let prevNode = null
    // if index = 0, head, set head to null
    if(index === 0) this.head = null
    else {
      while(count < index){
        // up until index
        prevNode = current
        current = current.next
        count++
      }
      prevNode.next = current.next
    }
  }

//   SEARCH search an element by key (value of data key) and return node
function search(key){
    // loop until .data = key value and return that node
    let current = this.head
    let count = 0
    while(current.data !== key){
        current = current.next
        count++
    }
    return current
}