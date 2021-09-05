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

    contains(findValue) {
        var ptr = this.head;
        var hasValue = false;
        while (ptr != null){
            if (ptr.value == findValue){
                hasValue = true;
                break;
            }
            ptr = ptr.next;
        }
        return hasValue;
    }

    length()
    {
        // Seriously, this should be made a property that is updated whenever a node is added or removed. ¯\_(ツ)_/¯
        var len = 0;
        var ptr = this.head;
        while (ptr != null){
            len++;
            ptr = ptr.next;
        }
        return len;
    }

    display()
    {
        var ptr = this.head;
        var outstr = "[ ";
        while (ptr != null){
            outstr = outstr.concat(String(ptr.value));
            if (ptr.next != null){
                outstr = outstr.concat(", ");
            }
            ptr = ptr.next;
        }
        outstr = outstr.concat(" ]");
        return outstr;
    }
}

let myList = new SLL();
myList.addFront("1st").addFront("2nd").addFront("3rd");
console.log(myList.front());
myList.removeFront();
console.log(myList.front());
console.log(myList.contains("1st"));
console.log(myList.contains("4th"));
myList.addFront(4).addFront("5th");
console.log(myList.length());
console.log(myList.display());