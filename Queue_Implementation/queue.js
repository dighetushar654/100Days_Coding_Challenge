class Queue {
    constructor() {
        this.data = [];
    }

    add (items) {
        this.data.push(items);
    }

    remove() {
        return this.data.shift();
    }

    isEmpty() {
        return this.data.length == 0;
    }

    // return front element in the queue
    front() {
        if(this.isEmpty()) {
            return "No items in the stack";
        }
        return this.data[0];
        
    }
}

let queue1 = new Queue();
console.log(queue1.front());
queue1.add(10);
queue1.add(20);
queue1.add(30);
console.log(queue1);
queue1.remove();
console.log(queue1);
console.log(queue1.front());
