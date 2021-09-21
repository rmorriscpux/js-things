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

    kthLastNode(k){
        var leadPtr = this.head;
        for (var i = 0; i < k; i++){
            if (leadPtr === null){
                return null;
            }
            leadPtr = leadPtr.next;
        }
        var ptr = this.head;
        while (leadPtr !== null){
            ptr = ptr.next;
            leadPtr = leadPtr.next;
        }
        return ptr.val;
    }

    isPalindrome(){
        if (this.head === null){
            return false;
        }

        var count = 0;
        var countPtr = this.head;
        while (countPtr !== null){
            count++;
            countPtr = countPtr.next;
        }

        var ptr = this.head;
        for(var i = 1; i <= Math.floor(count/2); i++)
        {
            if (ptr.val !== this.kthLastNode(i)){
                return false;
            }
            ptr = ptr.next;
        }
        return true;
    }

    shiftBy(amt){
        var count = 0;
        var countPtr = this.head;
        while (countPtr !== null){
            count++;
            countPtr = countPtr.next;
        }
        if (count <= 1){
            // No need to shift a list with 1 or 0 nodes.
            return this;
        }

        amt = amt % count;
        var endPtr = this.head;
        var trailPtr = this.head;
        if (amt > 0){ // Shift right.
            // Set endPtr to the amt'th value.
            for (var i = 0; i < amt; i++){
                endPtr = endPtr.next;
            }
            // Move the trailPtr starting at head and endPtr until endPtr reaches the last node.
            while (endPtr.next !== null){
                trailPtr = trailPtr.next;
                endPtr = endPtr.next;
            }
        }
        else if (amt < 0){ // Shift left.
            // Set endPtr to the end.
            while (endPtr.next !== null){
                endPtr = endPtr.next;
            }
            // Set trailPtr to the k'th value, where k is abs(amt % count).
            for (var i = -1; i > amt; i--){
                trailPtr = trailPtr.next;
            }
        }
        // Make trailPtr.next the new head, and trailPtr the new end. Original head goes to endPtr.next.
        endPtr.next = this.head;
        this.head = trailPtr.next;
        trailPtr.next = null;

        return this;
    }
}

let numList1 = new SLL();
numList1.addToFront(10).addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5).addToFront(4).addToFront(3).addToFront(2).addToFront(1).printList();
numList1.reverse().printList();

let numList2 = new SLL();
numList2.addToFront(10).addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5).addToFront(4).addToFront(3).addToFront(2).addToFront(1).printList();
console.log(numList2.kthLastNode(3));
console.log(numList2.kthLastNode(10));

let numList3 = new SLL();
numList3.addToFront(5).addToFront(4).addToFront(3).addToFront(2).addToFront(1).addToFront(1).addToFront(2).addToFront(3).addToFront(4).addToFront(5).printList();
console.log(numList3.isPalindrome());
console.log(numList2.isPalindrome());

let numList4 = new SLL();
numList4.addToFront(10).addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5).addToFront(4).addToFront(3).addToFront(2).addToFront(1).printList();
numList4.shiftBy(4).printList();
numList4.shiftBy(-5).printList();