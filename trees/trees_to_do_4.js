class BTNode {
    constructor(value) {
        if (!(this instanceof BTNode))
        { return new BTNode(value); }
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        if (!(this instanceof BST))
        { return new BST(); }
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

    remove(value){
        let found = [false];

        function _rRemove(treeNode, value, isFound){
            // value not found.
            if (treeNode === null){
                isFound[0] = false;
                return null;
            }

            // value < treeNode.val, go to left.
            if (value < treeNode.val){
                treeNode.left = _rRemove(treeNode.left, value, isFound);
            }
            // value > treeNode.val, go to right.
            else if(value > treeNode.val){
                treeNode.right = _rRemove(treeNode.right, value, isFound);
            }
            // value == treeNode.val.
            else{
                // Node has 0 or 1 branches. Simply replace the node with the root of the single branch (or null if no branches).
                if (treeNode.left === null){
                    return treeNode.right;
                }
                else if (treeNode.right === null){
                    return treeNode.left;
                }
                // Node has 2 branches.
                else{
                    // Set treeNode.val to the minimum value on the right side to maintain order.
                    var runner = treeNode.right;
                    while (runner.left != null){
                        runner = runner.left;
                    }
                    treeNode.val = runner.val;
                    // Now go down and remove that value.
                    treeNode.right = _rRemove(treeNode.right, treeNode.val, isFound);
                    isFound[0] = true;
                }
            }
            return treeNode;
        }

        this.root = _rRemove(this.root, value, found);
        return found[0];
    }

    removeAll(){
        this.root = null;
    }

    isValid(){
        function _rIsValid(treeNode){
            // Start assuming both sides are null or true.
            var leftValid = true, rightValid = true;

            // Check left side.
            if (treeNode.left !== null){
                if (treeNode.left.val <= treeNode.val){
                    leftValid = _rIsValid(treeNode.left);
                }
                else{
                    leftValid = false;
                }
            }
            // Check right side.
            if (treeNode.right !== null){
                if (treeNode.right.val >= treeNode.val){
                    rightValid = _rIsValid(treeNode.right);
                }
                else{
                    rightValid = false;
                }
            }
            // Node is valid if both left and right are valid.
            return leftValid && rightValid;
        }

        return _rIsValid(this.root);
    }

    addWithoutDupes(value){
        // Case: Empty List.
        if (this.root === null){
            this.root = new BTNode(value);
            return true;
        }
        function _rAdd(value, treeNode){
            if (value == treeNode.val){
                return false;
            }
            else if (value < treeNode.val){ // Put lower values to the left of this node.
                if (treeNode.left == null){ // Reached the end.
                    treeNode.left = new BTNode(value);
                    return true;
                }
                else{ // Continue down
                    return _rAdd(value, treeNode.left);
                }
            }
            else{ // Put higher values to the right of this node.
                if (treeNode.right == null){ // Reached the end.
                    treeNode.right = new BTNode(value);
                    return true;
                }
                else{ // Continue down
                    return _rAdd(value, treeNode.right);
                }
            }
            return;
        }
        
        return _rAdd(value, this.root);
    }

    bstReverseOrder(){
        function _rBstReverseOrder(treeNode){
            // Do the right side.
            if(treeNode.right !== null){
                _rBstReverseOrder(treeNode.right);
            }
            // Do this node.
            console.log(treeNode.val);
            // Do the left side.
            if(treeNode.left !== null){
                _rBstReverseOrder(treeNode.left);
            }
            return;
        }
        _rBstReverseOrder(this.root);
    }
}
