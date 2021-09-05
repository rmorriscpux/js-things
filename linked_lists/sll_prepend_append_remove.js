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

// Defining functions outside the class, since they will work with instances of the classes as parameters.
// Honestly, this seems kind of silly.

function prependVal(ListNode, val, before){
    // Check for null list.
    if (ListNode == null)
    {
        ListNode = new SLLNode(val);
    }
    else if (ListNode.value == before){
        let addNode = new SLLNode(val);
        addNode.next = ListNode;
        ListNode = addNode;
    }
    // Traverse until we found match.
    else{
        var ptr = ListNode;
        while (ptr.next != null)
        {
            if (ptr.next.value == before){
                break;
            }
            ptr = ptr.next;
        }
        // At this point we either found a before value or are at the end of the list. Either way, add the new node.
        let addNode = new SLLNode(val);
        addNode.next = ptr.next;
        ptr.next = addNode;
    }

    return ListNode;
}

function appendVal(list, val, after){
    var ptr = list.head;
    // Check for null list.
    if (ptr == null){
        list.head = new SLLNode(val);
    }
    // Traverse until we found match.
    else{
        while (ptr.next != null){
            if (ptr.value == after){
                break;
            }
            ptr = ptr.next;
        }
        // At this point we either found an after value or are at the end of the list. Either way, add the new node.
        let addNode = new SLLNode(val);
        addNode.next = ptr.next;
        ptr.next = addNode;
    }
    return list;
}

function removeVal(ListNode, val){
    var ptr = ListNode;
    if (ptr != null){
        // First value check.
        if (ptr.value == val){
            ListNode = ptr.next;
        }
        else {
            while (ptr.next != null){
                if (ptr.next.value == val){
                    ptr.next = ptr.next.next;
                    break;
                }
                ptr = ptr.next;
            }
        }
    }
    return ListNode;
}

let myList = new SLL();
appendVal(myList, 8, 0);
appendVal(myList, 5, 0);
appendVal(myList, 9, 0);
appendVal(myList, 4, 0);
appendVal(myList, 10, 0);
appendVal(myList, 1, 0);
appendVal(myList, 7, 0);
appendVal(myList, 3, 0);
appendVal(myList, 6, 7);
appendVal(myList, 2, 7);
console.log(myList.display());
prependVal(myList.head, 11, 1);
prependVal(myList.head, 12, 8);
prependVal(myList.head, 13, 3);
console.log(myList.display());