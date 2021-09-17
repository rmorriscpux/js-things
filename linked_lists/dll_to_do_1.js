class SLNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value){
        var temp = this.head;
        this.head = new SLNode(value);
        this.head.next = temp;
        return this;
    }

    addToBack(value){
        if (this.head === null){
            this.head = new SLNode(value);
            return this;
        }
        var ptr = this.head;
        while (ptr.next != null){
            ptr = ptr.next;
        }
        runner.next = new SLNode(value);
        return this;
    }

    printList(){
        var outStr = "[";
        var ptr = this.head;
        while (ptr != null){
            outStr = outStr + " " + ptr.val;
            if (ptr.next !== null){
                outStr = outStr + ",";
            }
            ptr = ptr.next;
        }
        outStr = outStr + " ]";
        console.log(outStr);
        return this;
    }

    reverse(){
        if (this.head === null){
            return this;
        }
        if (this.head.next === null){
            return this;
        }
        var leadPtr = this.head.next;
        var ptr = this.head;
        var trailPtr = null;
        while (leadPtr != null){
            ptr.next = trailPtr;
            trailPtr = ptr;
            ptr = leadPtr;
            leadPtr = leadPtr.next;
        }
        ptr.next = trailPtr;
        this.head = ptr;
        return this;
    }
}

let numList1 = new SLL();
numList1.addToFront(10).addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5).addToFront(4).addToFront(3).addToFront(2).addToFront(1).printList();
numList1.reverse().printList();