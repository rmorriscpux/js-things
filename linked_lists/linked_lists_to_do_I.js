class SLLNode{
    constructor(_value){
        this.value = _value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(newValue){
        let newNode = new SLLNode(newValue);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    display(){
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

    splitOnVal(val){
        var ptr = this.head;
        if (ptr == null){
            // Empty list.
            return null;
        }

        if (ptr.value == val){
            // No split necessary, return the full list.
            return this;
        }

        // Traverse through the list until val is found.
        while (ptr.next != null){
            if (ptr.next.value == val){
                break;
            }
            ptr = ptr.next;
        }

        let newSLL = new SLL();
        newSLL.head = ptr.next; // Note: will return empty list if split val was not found.
        ptr.next = null;
        return newSLL;
    }

    removeNegatives(){
        if (this.head == null){
            // Empty list
            return this;
        }
        // Take care of any negative values at the start of the list.
        while (this.head.value < 0){
            this.head = this.head.next;
            if (this.head == null){
                // Gone through and now have empty list (no non-negatives), so we're done.
                return this;
            }
        }

        // Find and remove the rest of the negative values.
        var ptr = this.head;

        while (ptr.next != null){
            if (ptr.next.value < 0){
                // Next value is negative, so set ptr.next to the node after the next, thereby removing the next value from the list.
                ptr.next = ptr.next.next;
            }
            else{
                // Next value is not negative, so move to the next node.
                ptr = ptr.next;
            }
        }

        return this;
    }

    concat(SList){
        if (this.head == null){
            // Empty list. Return the second list as is.
            this.head = SList.head;
            return SList;
        }
        
        // Get to the end of this list.
        var ptr = this.head;
        while (ptr.next != null){
            ptr = ptr.next;
        }

        // Now add the other list.
        ptr.next = SList.head;

        return this;
    }

    partition(val){
        if (this.head == null || this.head.next == null){
            // List has 0 or 1 nodes. No sorting.
            return this;
        }
        // Find val.
        var ptr = this.head;
        if (this.head.value != val){
            // If the first value is what we're looking for, we don't need to do all this.
            while (ptr.next != null){
                if (ptr.next.value == val){
                    break;
                }
                ptr = ptr.next;
            }

            if (ptr.next == null){
                // val not found. Return list as is.
                return this;
            }

            // Reorder nodes so the node with the value is the head.
            let tempNode = ptr.next;
            ptr.next = ptr.next.next;
            tempNode.next = this.head;
            this.head = tempNode;
        }
        // At this point, the node with val is in the front. We can now remove and re-add values from one side to the other.
        ptr = this.head;
        let pivot = this.head;
        while (ptr.next != null){
            if (ptr.next.value < pivot.value){
                // next value is less than val. Remove and move to the front.
                this.addToFront(ptr.next.value);
                ptr.next = ptr.next.next;
                // Note: A bit concerned about memory management here. Look up garbage collection.
            }
            else{
                // Next value is greater than val. Simply move to the next value.
                ptr = ptr.next;
            }
        }
        // All done.
        return this;
    }
}

console.log("=== 1 ===");
let myList1 = new SLL();
myList1.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
console.log(myList1.display());
let myList1Split = myList1.splitOnVal(7);
console.log(myList1.display(), myList1Split.display());

console.log("=== 2 ===");
let myList2 = new SLL();
myList2.addToFront(-8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(-10).addToFront(4).addToFront(9).addToFront(5).addToFront(-3);
console.log(myList2.display());
myList2.removeNegatives();
console.log(myList2.display());

console.log("=== 3 ===");
let myList3 = new SLL();
myList3.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1);
console.log(myList3.display());
let myList3Conc = new SLL();
myList3Conc.addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
myList3.concat(myList3Conc);
console.log(myList3.display());

console.log("=== 4 ===");
let myList4 = new SLL();
myList4.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
console.log(myList4.display());
myList4.partition(3);
console.log(myList4.display());