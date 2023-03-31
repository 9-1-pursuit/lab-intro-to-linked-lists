const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
    constructor(head = null){
      this.head = head
    }

    // *********     INSERT METHOD      **********

    insert(data){
      let newNode = new Node(data)
      // if a head does not exist, make this node the head
      // if a head does exist, make this node the new head 
      // and set it's "next" pointer to the old head, which now becomes the 2nd node
      !this.head ? this.head = newNode : newNode.next = this.head
      this.head = newNode
    }

      // *********     SIZE METHOD      **********

      //set a counter - totalNodes
      //set a variable to equal the current head - this.head
      //while a node exists in the list, increase the total by 1 each time the loop processes
      //return the resulting total

      size(){
        let totalNodes = 0
        let node = this.head
        while(node){
          totalNodes++
          node = node.next
        }
        return totalNodes
      }

      // *********     DELETE METHOD      **********

       delete(data) {
          //start with head of list - set variable to head
          //set counter to mov
          let node = this.head;
          let nodeCount = 0;

          //count the nodes that are not the node to be deleted - process loop until that node is located
          while (node.data !== data && node.next) {
            nodeCount++;
            node = node.next;
          }
  
            let nodeToDelete = node; //set the last value of node ( the "next" pointer of the node to be deleted (line 47) to a variable)
            node = this.head; //reset the node variable to the head node of the list

            //loop through the list to get to the last node before the one that should be deleted
            for (let i = 1; i < nodeCount; i++) {
              node = node.next;
            }

            node.next = nodeToDelete.next;  //set the pointer of the last node to the next pointer stored in the node that will be deleted, so the list will continue without that node - as it is no longer pointed to in the list
            }

      // *********     getFIRST METHOD      **********
        //this.head is the first node
        getFirst() {
          return this.head;
        }
      
      // *********     getLAST METHOD       **********
      
        getLast() {
          let tail = this.head //set head of list to a variable
          if(!this.head) return null //check if head exists
         
          //As long as the current node is pointing to another node, we are not at the end of the list
          //in the loop update the variable's pointer to the next node's pointer until there are no more nodes 
          while(tail.next){    
            tail = tail.next
          }
          return tail;
        }
    

      // *********     SEARCH METHOD        **********

          search(key){
            let node = this.head

            do{
              node = node.next
            } while (node !== null && node.data !== key)
            return node
          }

      // *********     getKth METHOD        **********
          getKth(k) {
            let node = this.head
            let nodeCount = 0
            let kNode
          
          while(node){
            if(node == k){
              kNode = node
            } else {
              node = node.next
            }
          }
          return kNode
        }
     
    
      // *********     getKthToLast METHOD      **********
      // *********     isEMPTY METHOD       **********
      // *********     CLEAR METHOD         **********
      // *********     toARRAY METHOD      **********
      // *********     containsDUPLICATES METHOD      **********




}


module.exports = {
  Node,
  LinkedList,
};
