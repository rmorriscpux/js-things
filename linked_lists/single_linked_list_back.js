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

    back(){
        if (this.head == null)
            return null;

        var ptr = this.head;
        while (ptr.next != null){
            ptr = ptr.next;
        }
        return ptr.value;
    }

    removeBack(){
        if (this.head == null)
            return this;
        
        if (this.head.next == null){
            this.head = null;
            return this;
        }

        var ptr = this.head;
        while (ptr.next.next != null)
            ptr = ptr.next;
        ptr.next = null;
        return this;
    }

    addBack(_value){
        if (this.head == null){
            this.head = new SLLNode(_value);
            return this;
        }

        var ptr = this.head;
        while (ptr.next != null)
            ptr = ptr.next;
        ptr.next = new SLLNode(_value);
        return this;
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
myList.addBack(1).addBack(2).addBack(3).addBack(4).addBack(5);
console.log(myList.back());
myList.removeBack().removeBack();
console.log(myList.back());
