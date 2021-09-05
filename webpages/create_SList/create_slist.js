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

    append(value){
        var ptr = this.head;
        if (ptr == null){
            this.head = new SLLNode(value);
        }
        else{
            while(ptr.next != null){
                ptr = ptr.next;
            }
            ptr.next = new SLLNode(value);
        }
        return this;
    }

    displayList(){
        var outstr = "\n";
        var ptr = this.head;
        while (ptr != null){
            outstr += "<li>" + String(ptr.value) + "</li>\n";
            ptr = ptr.next;
        }
        return outstr;
    }
}

window.onload = function() {
    console.log("In Function.");
    inputList = new SLL();
    var inputVal;
    while (1){
        inputVal = prompt("Please enter a value.", "");
        if (inputVal == null || inputVal == ""){
            break;
        }
        inputList.append(inputVal);
    }
    window.document.getElementById("this_list").innerHTML = inputList.displayList();
};