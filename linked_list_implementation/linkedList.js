// What is a Linked List?
// A linked list is a linear data structure similar to an array.
// Each element (commonly called nodes)
// contains two items: the data stored and a link to the next node.
// The entry point to a linked list is called the head. 
// The head is a reference to the first node in the linked list.

// advantage of Linked Lists
// Nodes can easily be removed or added from 
// a linked list without reorganizing the entire data structure.

// Disadvantages of Linked Lists
// Search operations are slow in linked lists.
// Unlike arrays, random access of data elements is not allowed.
// Nodes are accessed sequentially starting from the first node.
// It uses more memory than arrays because of the storage of the pointers.

// Implementaion of linked list in javascript

// what is class 
// class is collection of objects and it does'nt take any space,
// on memory , class is also called as blueprint/logical entity.

// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked list class with head points first node if not then initialised to null.
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // add(element) – It adds an element at the end of the list.
    add(data) {
        // create new node first
        var node = new Node(data);
        // for traversing create one temp variable
        var temp;
        if(this.head == null) {
            this.head = node;
        } else {
            temp = this.head;
            // start traversing use while loop
            while(temp.next !== null) {
                temp = temp.next;
            }
            // after get last node then add node 
            temp.next = node;
        }
        this.size++;
    }

    // print the all linked list
    printlist() {
        // var temp;
        // temp = this.head;
        // do {
        //     console.log(temp.data);
        //     temp = temp.next;
        // } while(temp.next !== null)
        var temp = this.head;
        var str = "";
        while (temp) {
            str += temp.data + " ";
            temp = temp.next;
        }
        console.log(str);
    }

    // insert node in the middle of the list
    insertInMiddle(data, location) {
        var newnode = new Node(data);
        var temp;
        temp = this.head;
        while(temp.data !== location) {
            temp = temp.next;
        }
        var nextnode = temp.next;
        temp.next = newnode;
        newnode.next = nextnode;
    }

    // delete node in the middle of the list
    deleteInMiddle(location) {
        var temp;
        temp = this.head;
        var prenode;
        var nextnode;
        while(temp.data !== location) {
            prenode = temp;
            temp = temp.next;
        }
        prenode.next = temp.next;
    }

    // delete last node 
    deletenode() {
        var temp;
        temp = this.head;
        var prenode;
        while(temp.next !== null) {
            prenode = temp;
            temp = temp.next;
        }
        prenode.next = null;

    }
}

// add(element) – It adds an element at the end of the list.

// what is object
// object is instance of class that executes the class.
// once the object is created, it takes up space like other variable in memory.
// create the linked list/ objects

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.printlist();
list.insertInMiddle(50,20);
list.printlist();
list.deleteInMiddle(50);
list.printlist();
list.deletenode();
list.printlist();
