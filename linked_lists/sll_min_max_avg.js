class SLLNode {
    constructor(_value){
        this.value = _value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let front = new SLLNode(value);
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

    min() {
        if (this.head == null)
            return null;

        var min = this.head.value;
        var ptr = this.head.next;

        while (ptr != null){
            if (ptr.value < min)
                min = ptr.value;
            ptr = ptr.next;
        } 
        return min;
    }

    max() {
        if (this.head == null)
            return null;

        var max = this.head.value;
        var ptr = this.head.next;

        while (ptr != null){
            if (ptr.value > max)
                max = ptr.value;
            ptr = ptr.next;
        } 
        return max;
    }

    average() {
        if (this.head == null)
            return null;

        var sum = 0;
        var count = 0;
        var ptr = this.head;

        while (ptr != null){
            sum += ptr.value;
            count++;
            ptr = ptr.next;
        }
        return sum / count;
    }
}

let myList = new SLL();
myList.addFront(1).addFront(10).addFront(2).addFront(9).addFront(3).addFront(8).addFront(4).addFront(7).addFront(5).addFront(6);
console.log(myList.min());
console.log(myList.max());
console.log(myList.average());