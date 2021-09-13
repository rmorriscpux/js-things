class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    
    add(value){
        // Case: Empty List.
        if (this.root === null){
            this.root = new BTNode(value);
            return this;
        }
        function _rAdd(value, treeNode){
            if (value < treeNode.val){ // Put lower values to the left of this node.
                if (treeNode.left == null){ // Reached the end.
                    treeNode.left = new BTNode(value);
                }
                else{ // Continue down
                    _rAdd(value, treeNode.left);
                }
            }
            else{ // Put higher values to the right of this node.
                if (treeNode.right == null){ // Reached the end.
                    treeNode.right = new BTNode(value);
                }
                else{ // Continue down
                    _rAdd(value, treeNode.right);
                }
            }
            return;
        }
        _rAdd(value, this.root);
        return this;
    }

    contains(value){
        function _rContains(value, treeNode){
            // Reached the end, not found.
            if(treeNode === null){
                return false;
            }

            if(value == treeNode.val){
                return true;
            }
            else if(value < treeNode.val){
                return _rContains(value, treeNode.left);
            }
            else{
                return _rContains(value, treeNode.right);
            }
        }
        return _rContains(value, this.root);
    }


    min(){
        if (this.root === null){
            return;
        }

        var runner = this.root;
        while (runner.left != null){
            runner = runner.left;
        }
        return runner.val;
    }

    max(){
        if (this.root === null){
            return;
        }

        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        return runner.val;
    }

    size(){
        function _rCount(treeNode){
            // Empty check.
            if (treeNode === null){
                return 0;
            }

            return 1 + _rCount(treeNode.left) + _rCount(treeNode.right);
        }
        
        return _rCount(this.root);
    }

    isEmpty(){
        return this.root !== null;
    }

    traversePreOrder(){
        function _rTraversePreOrder(treeNode){
            console.log(treeNode.val);
            if(treeNode.left !== null){
                _rTraversePreOrder(treeNode.left);
            }
            if(treeNode.right !== null){
                _rTraversePreOrder(treeNode.right);
            }
            return;
        }
        _rTraversePreOrder(this.root);
        return;
    }

    traversePostOrder(){
        function _rTraversePostOrder(treeNode){
            if(treeNode.left !== null){
                _rTraversePostOrder(treeNode.left);
            }
            console.log(treeNode.val);
            if(treeNode.right !== null){
                _rTraversePostOrder(treeNode.right);
            }
            return;
        }
        _rTraversePostOrder(this.root);
        return;
    }

    minHeight(){
        function _rMinHeight(treeNode, curHeight){
            if (treeNode.left === null && treeNode.right === null){
                // At a leaf. Return.
                return curHeight;
            }
            else if (treeNode.left !== null && treeNode.right !== null){
                var leftHeight = _rMinHeight(treeNode.left, curHeight + 1);
                var rightHeight = _rMinHeight(treeNode.right, curHeight + 1);
                return leftHeight < rightHeight ? leftHeight : rightHeight;
            }
            else if (treeNode.left !== null){
                return _rMinHeight(treeNode.left, curHeight + 1);
            }
            else{
                return _rMinHeight(treeNode.right, curHeight + 1);
            }
        }
        if (this.root === null){
            // Empty tree.
            return 0;
        }

        return _rMinHeight(this.root, 1);
    }
}

class SLLNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.head = null;
    }

    bstToSll(binaryTree){
        function _rBstToSll(treeNode, sllRunner){
            // Check left.
            if (treeNode.left !== null){
                sllRunner = _rBstToSll(treeNode.left, sllRunner);
            }
            // Get middle and advance.
            sllRunner.next = new SLLNode(treeNode.val);
            sllRunner = sllRunner.next;
            // Check right.
            if (treeNode.right !== null){
                sllRunner = _rBstToSll(treeNode.right, sllRunner);
            }
            return sllRunner;
        }
        this.head = new SLLNode(null);
        _rBstToSll(binaryTree.root, this.head);
        this.head = this.head.next;
        return this;
    }

    printList(){
        var outStr = "[";
        var runner = this.head;
        while (runner != null){
            outStr = outStr + runner.val;
            if (runner.next !== null){
                outStr = outStr + ", ";
            }
            runner = runner.next;
        }
        outStr = outStr + "]";
        return outStr;
    }
}

function bstToArray(binaryTree){
    function _rBstToArray(treeNode, arr){
        if (treeNode.left !== null){
            _rBstToArray(treeNode.left, arr);
        }
        arr.push(treeNode.val);
        if (treeNode.right !== null){
            _rBstToArray(treeNode.right, arr);
        }
        return;
    }
    // Setup
    let outArray = [];
    // Start traversal.
    _rBstToArray(binaryTree.root, outArray);
    return outArray;
}

// creating a new BST
let tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)

// // searching for value
// console.log(tree.contains(17));
// // searching for value that doesn't exist in the tree
// console.log(tree.contains('hello'));

// // testing min
// console.log(tree.min());
// // testing max
// console.log(tree.max());

// // testing size
// console.log(tree.size());

// //testing isEmpty
// console.log(tree.isEmpty());
// emptyTree = new BST();
// console.log(emptyTree.isEmpty());

// // printing our tree
// console.log(tree);

tree.traversePreOrder();
console.log("-----");
tree.traversePostOrder();
console.log("-----");
console.log(bstToArray(tree));

console.log("-----");
linkedList = new SLL();
linkedList.bstToSll(tree);
console.log(linkedList.printList());

console.log("------");
console.log(tree.minHeight());