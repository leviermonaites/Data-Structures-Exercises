class Node {
  static lastCreated;
  constructor(data) {
    this.data = data;
    this.next = {};
    if (Node.lastCreated) {
      Node.lastCreated.next = this;
    }
    Node.lastCreated = this;
  }

  static countNodes(head) {
    let count = head.data ? 1 : 0;
    if (head.next) {
      let currentNode = head;
      do {
        console.log("The current Node data is: ", currentNode.data);
        console.log("The next Node data is: ", currentNode.next.data);
        currentNode = currentNode.next;
        count += 1;
      } while (currentNode.next);
    }
    console.log("The total of nodes is: ", count);
    return count;
  }
}

const head = new Node(4);
const nodeB = new Node(8);
const nodeC = new Node(11);
const nodeD = new Node(17);

Node.countNodes(head);
