class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let front = new Node(value);
        front.next = this.head;
        this.head = front;
        return this;
    }

    removeFront() {
        if (this.head == null) {
            return null;
        }

        let toRemove = this.head.value;
        this.head = this.head.next; // Is there implicit memory management here?
        return this;
    }

    front() {
        if (this.head == null) {
            return null;
        }

        return this.head.value;
    }
}

let myList = new SLL();
myList.addFront("1st").addFront("2nd").addFront("3rd");
console.log(myList.front());
myList.removeFront();
console.log(myList.front());