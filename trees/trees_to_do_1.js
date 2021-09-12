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
}

// creating a new BST
tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)

// searching for value
console.log(tree.contains(17))
// searching for value that doesn't exist in the tree
console.log(tree.contains('hello'))

// testing min
console.log(tree.min())
// testing max
console.log(tree.max())

// testing size
console.log(tree.size())

//testing isEmpty
console.log(tree.isEmpty())
emptyTree = new BST();
console.log(emptyTree.isEmpty())

// printing our tree
console.log(tree);