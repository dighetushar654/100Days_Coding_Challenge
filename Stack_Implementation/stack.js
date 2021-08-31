// Stack is a linear data structure which
// follows a particular order in which the operations
// are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

// create stack class using array in javascript
class Stack {
    // array is use for implementation
    // creation of an object of a stack class
    // this constructor would be called automatically.
    constructor () {
        this.data = [];
    }
    // functions for doing operations on stack
    // in class no need function keyword for defining the functions
    // push the elements in stack
    add(element) {
        this.data.push(element);
    }

    // remove the element in the stack
    remove() {
        // remove top most element on stack
        this.data.pop(this.data.length);
    }

    // find top element
    top() {
        return this.data[this.data.length - 1];
    }
}

// create stack obkect
var stack1 = new Stack();
stack1.add(10);
stack1.add(20);
stack1.add(30);
console.log(stack1);
stack1.remove();
console.log(stack1);
stack1.add(40);
console.log(stack1.top());
