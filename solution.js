const { nums, words } = require("./data/data.js");

module.exports = {
  Node,
  LinkedList,
};

class Node {
  constructor(data){
this.data = data;
this.next = null
  }
}

class LinkList{
  constructor(){
    this.head = null
  }
}
