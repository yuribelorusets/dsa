/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) this.tail = newNode;

    if (this.head !== null) newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("Cannot remove element from an empty list.");
    }

    let returnVal = this.tail.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;

      while (current !== null) {
        if (current.next.next === null) {
          current.next = null;
          this.tail = current;
        }
        current = current.next;
      }
    }
    this.length--;
    return returnVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("Cannot remove element from an empty list.");
    }

    let returnVal = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = returnVal.next;
    }
    this.length--;
    return returnVal.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (0 > idx >= this.length) {
      throw new Error("Index does not exist in list.");
    }

    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (index === idx) {
        return current.val;
      }
      current = current.next;
      index++;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
