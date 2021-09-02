class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    // add items in the bst
    add(data) {
        var node1 = new Node(data);
        var temp;
        if(this.root == null) {
            this.root = node1
        } else {
            this.insertNode(this.root, node1);
        }
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}



var bst1 = new BST();
bst1.add(5);
bst1.add(3);
bst1.add(6);
bst1.add(1);
bst1.add(4);

console.log(bst1);
