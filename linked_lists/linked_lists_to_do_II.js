class SLLNode{
    constructor(_value){
        this.value = _value;
        this.next = null;
    }

    // deleteSelf(){
    //     this = this.next; // It could really be that simple, eh?
    // }
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
}

function secondToLastValue(listNode){
    var ptr = listNode;
    // Small list.
    if (ptr == null || ptr.next == null){
        return null;
    }
    // Traverse to second-to-last.
    while (ptr.next.next != null){
        ptr = ptr.next;
    }

    return ptr.value;
}

function copyList(listToCopy){
    let newList = new SLL();
    if (listToCopy.head == null){
        // Copying an empty list.
        return newList;
    }
    // Set the head of the newList with a copy of the original value.
    newList.head = new SLLNode(listToCopy.head.value);
    var copyPtr = listToCopy.head.next;
    var pastePtr = newList.head;
    // Now get the rest.
    while (copyPtr != null){
        pastePtr.next = new SLLNode(copyPtr.value);
        copyPtr = copyPtr.next;
        pastePtr = pastePtr.next;
    }

    return newList;
}

function filter(listToFilterHead, min, max){
    let filteredList = new SLL();

    var ptr = listToFilterHead;
    while (ptr != null){
        if (ptr.value >= min && ptr.value <= max){
            break;
        }
        ptr = ptr.next;
    }
    
    if (ptr == null){
        // No values in filter; return empty list.
        return filteredList;
    }
    // Build out new list.
    filteredList.head = new SLLNode(ptr.value);
    ptr = ptr.next;
    var newListPtr = filteredList.head;
    while (ptr != null){
        if (ptr.value >= min && ptr.value <= max){
            newListPtr.next = new SLLNode(ptr.value);
            newListPtr = newListPtr.next;
        }
        ptr = ptr.next;
    }

    return filteredList;
}

console.log("=== 1 ===");
let myList1 = new SLL();
myList1.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
console.log(myList1.display());
console.log(secondToLastValue(myList1.head));
console.log(secondToLastValue(myList1.head.next.next.next.next.next.next.next.next.next));

// console.log("=== 2 ===");
// let myList2 = new SLL();
// myList2.addToFront(-8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(-10).addToFront(4).addToFront(9).addToFront(5).addToFront(-3);
// console.log(myList2.display());
// myList2.removeNegatives();
// console.log(myList2.display());

console.log("=== 3 ===");
let myList3 = new SLL();
myList3.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
let myList3Copy = copyList(myList3);
console.log(myList3.display());
console.log(myList3Copy.display());

console.log("=== 4 ===");
let myList4 = new SLL();
myList4.addToFront(8).addToFront(6).addToFront(2).addToFront(7).addToFront(1).addToFront(10).addToFront(4).addToFront(9).addToFront(5).addToFront(3);
let myList4Filter = filter(myList4.head, 4, 7);
console.log(myList4.display());
console.log(myList4Filter.display());