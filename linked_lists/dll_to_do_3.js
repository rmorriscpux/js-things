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

    hasLoop(){
        if (this.head === null){
            return false;
        }
        if (this.head.next === null){
            return false;
        }

        var loopFound = false;
        var endPtr = this.head.next;
        var runPtr = this.head;

        while (endPtr.next !== null){
            runPtr = this.head;
            while (runPtr != endPtr){
                if (runPtr.next == endPtr.next){
                    loopFound = true;
                    break;
                }
                runPtr = runPtr.next;
            }
            if (loopFound){
                break;
            }
            endPtr = endPtr.next;
        }

        return loopFound;
    }

    breakLoop(){
        if (this.head === null){
            return this;
        }
        if (this.head.next === null){
            return this;
        }

        var loopFound = false;
        var endPtr = this.head.next;
        var runPtr = this.head;

        while (endPtr.next !== null){
            runPtr = this.head;
            while (runPtr != endPtr){
                if (runPtr.next == endPtr.next){
                    loopFound = true;
                    break;
                }
                runPtr = runPtr.next;
            }
            if (loopFound){
                endPtr.next = null
                break;
            }
            endPtr = endPtr.next;
        }

        return this;
    }

    loopStart(){
        if (this.head === null){
            return null;
        }
        if (this.head.next === null){
            return null;
        }

        var loopFound = false;
        var endPtr = this.head.next;
        var runPtr = this.head;

        while (endPtr.next !== null){
            runPtr = this.head;
            while (runPtr != endPtr){
                if (runPtr.next == endPtr.next){
                    loopFound = true;
                    break;
                }
                runPtr = runPtr.next;
            }
            if (loopFound){
                return endPtr.next;
            }
            endPtr = endPtr.next;
        }

        return null;
    }

    numberOfNodes(){
        if (this.head === null){
            return 0;
        }
        if (this.head.next === null || this.head.next == this.head){
            return 1;
        }

        function _rNumberOfNodes(endPtr, count){
            if (endPtr.next === null){
                return count;
            }
            var ptr = this.head;
            while (ptr != endPtr){
                if (ptr.next == endPtr.next){
                    return count;
                }
                ptr = ptr.next;
            }
            return _rNumberOfNodes(endPtr.next, count+1);
        }
        
        return _rNumberOfNodes(this.head.next, 2);
    }

    swapPairs(){
        if (this.head === null){
            return this;
        }
        if (this.head.next === null){
            return this;
        }

        function _rSwapPairs(listNode){
            if (listNode.next === null){
                return;
            }
            if (listNode.next.next === null){
                return;
            }

            var tempNode = listNode.next;
            listNode.next = listNode.next.next;
            tempNode.next = listNode.next.next;
            listNode.next.next = tempNode;

            _rSwapPairs(listNode.next.next);
            return;
        }

        _rSwapPairs(this.head.next);
    }
}

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