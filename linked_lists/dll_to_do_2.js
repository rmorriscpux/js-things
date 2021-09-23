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
        ptr.next = new SLNode(value);
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

    length(){
        var count = 0;
        var ptr = this.head;
        while (ptr != null){
            count++;
            ptr = ptr.next;
        }
        return count;
    }
}

function sumNumerals(numeralList1, numeralList2){
    let sumList = new SLL();
    var list1Ptr = numeralList1.head, list2Ptr = numeralList2.head;

    var digitSum = 0, carry = 0;
    while (list1Ptr != null || list2Ptr != null || carry != 0){
        digitSum = carry;

        if (list1Ptr != null){
            digitSum += list1Ptr.val;
            list1Ptr = list1Ptr.next;
        }

        if (list2Ptr != null){
            digitSum += list2Ptr.val;
            list2Ptr = list2Ptr.next;
        }

        sumList.addToBack(digitSum % 10);
        carry = Math.floor(digitSum / 10);
    }
    return sumList;
}

function sumNumeralsMS(numeralList1, numeralList2){
    let sumList = new SLL();
    var lengthDiff = numeralList1.length() - numeralList2.length();

    // Recursively sum numerals in linked lists.
    function _rSumNumeralsMS(list1Ptr, list2Ptr, lengthDiff, sumList){
        var sum;
        if (list1Ptr.next == null && list2Ptr.next == null){ // End of both lists.
            sum = list1Ptr.val + list2Ptr.val;
        }
        else{
            if (lengthDiff == 0){
                sum = list1Ptr.val + list2Ptr.val + _rSumNumeralsMS(list1Ptr.next, list2Ptr.next, lengthDiff, sumList);
            }
            else if (lengthDiff > 0){ // numeralList1 is larger.
                sum = list1Ptr.val + _rSumNumeralsMS(list1Ptr.next, list2Ptr, lengthDiff-1, sumList);
            }
            else if (lengthDiff < 0){ // numeralList2 is larger.
                sum = list2Ptr.val + _rSumNumeralsMS(list1Ptr, list2Ptr.next, lengthDiff+1, sumList);
            }
        }
        sumList.addToFront(sum % 10);
        return Math.floor(sum / 10);
    }

    var endCarry = _rSumNumeralsMS(numeralList1.head, numeralList2.head, lengthDiff, sumList);
    if (endCarry > 0){
        sumList.addToFront(endCarry);
    }

    return sumList;
}

let num1List1 = new SLL()
num1List1.addToBack(2).addToBack(0).addToBack(1);
let num1List2 = new SLL()
num1List2.addToBack(8).addToBack(4);
num1List1.printList();
num1List2.printList();
sumNumerals(num1List1, num1List2).printList();
sumNumeralsMS(num1List1, num1List2).printList();

function setupLoop(length, loopNum){
    let loopList = new SLL();
    if (length < loopNum || length < 1){
        return;
    }
    loopList.addToFront(length);
    var endPtr = loopList.head, loopPtr = loopList.head;
    for (var i = length-1; i > 0; i--){
        loopList.addToFront(i);
        if (i == loopNum){
            loopPtr = loopList.head;
        }
    }
    endPtr.next = loopPtr;
    return loopList;
}

let loopList2 = setupLoop(5,3);
var loopPtr = loopList2.head;
for (var i = 0; i < 10; i++){
    console.log(loopPtr.val);
    loopPtr = loopPtr.next;
}

class SLCNode{
    constructor(value){
        this.val = value;
        this.next = null;
        this.child = null;
    }

    addChild(value){
        this.child = new SLCL();
        this.child.head = new SLCNode(value);
        return this;
    }
}

class SLCL{
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

    flatten(){
        if (this.head === null){
            return;
        }
        if (this.head.next === null && this.head.child === null){
            return;
        }

        function _rFlatten(listNode, nextNode, count){
            if (listNode.next === null){
                listNode.next = nextNode;
                return count;
            }
            if (listNode.child !== null){
                if (typeof(listNode.child) == "number"){
                    return _rFlatten(listNode.next, listNode.next.next, count+1);
                }
                else{
                    var newCount = _rFlatten(listNode.child.head, listNode.next, count+1);
                    listNode.next = listNode.child.head;
                    listNode.child = newCount - count;
                    return _rFlatten(nextNode, nextNode.next, newCount+1);
                }
            }
        }

        _rFlatten(this.head, this.head.next, 0);
        return this;
    }

    unflatten(){
        function _rUnflatten(listNode){
            if (typeof(listNode.child) == "number"){
                var endChild = listNode;
                for (var i = 0; i < listNode.child; i++){
                    endChild = endChild.next;
                }
                listNode.child = listNode.next;
                listNode.next = endChild.next;
                endChild.next = null;
                _rUnflatten(listNode.child);
            }

            if (listNode.next !== null){
                _rUnflatten(listNode.next);
            }

            return;
        }

        _rUnflatten(this.head);
        return this;
    }
}