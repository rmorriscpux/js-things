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

    height(){
        function _rHeight(treeNode){
            // Reached the end.
            if(treeNode === null){
                return 0;
            }
            // Recursively dig into the branches.
            var leftStick = _rHeight(treeNode.left), rightStick = _rHeight(treeNode.right);
            // Use the longer branch.
            var longerStick = leftStick > rightStick ? leftStick : rightStick;
            return 1 + longerStick;
        }
        return _rHeight(this.root);
    }

    isBalanced(){
        // Empty List
        if (this.root === null){
            return true;
        }

        function _rBalanced(treeNode){
            // Case: Left and right both null. Node is balanced.
            if (treeNode.left === null && treeNode.right === null){
                return true;
            }
            // Case: Left is not null, right is null. Node is balanced if left is a leaf (no left/right branches).
            else if (treeNode.left !== null && treeNode.right === null){
                return (treeNode.left.left === null && treeNode.left.right === null);
            }
            // Case: Left is null, right is not null. Node is balanced if right is a leaf (no left/right branches).
            else if (treeNode.left !== null && treeNode.right === null){
                return (treeNode.right.left === null && treeNode.right.right === null);
            }
            // Case: Left and right are both null. Node is balanced if both branches are balanced.
            else{
                return (_rBalanced(treeNode.left) && _rBalanced(treeNode.right));
            }
        }

        return _rBalanced(this.root);
    }

    closestCommonAncestor(val1, val2){
        // Values exist in tree check.
        if (!(this.contains(val1) && this.contains(val2))){
            return false;
        }
        // Order vals.
        if (val1 > val2){
            var temp = val1;
            val1 = val2;
            val2 = temp;
        }

        function _rClosestCommonAncestor(treeNode, lowVal, highVal){
            // Case: treeNode.val is between lowVal and highVal. treeNode is the common ancestor.
            if (treeNode.val >= lowVal && treeNode.val <= highVal){
                return treeNode.val;
            }
            // Case: treeNode.Val is less than lowVal. Go to left branch.
            else if(treeNode.val < lowVal){
                return _rClosestCommonAncestor(treeNode.left, lowVal, highVal);
            }
            // Case: treeNode.Val is greater than highVal. Go to right branch.
            else if(treeNode.val > highVal){
                return _rClosestCommonAncestor(treeNode.right, lowVal, highVal);
            }
        }

        return _rClosestCommonAncestor(this.root, val1, val2);
    }
}

function arrayToBST(sortedArray){
    function _branchDown(treeNode, leftArray, rightArray){
        if (leftArray.length > 0){
            var leftIndex = Math.floor(leftArray.length / 2);
            treeNode.left = new BTNode(leftArray[leftIndex]);
            _branchDown(treeNode.left, leftArray.slice(0, leftIndex), leftArray.slice(leftIndex+1));
        }
        if (rightArray.length < 0){
            var rightIndex = Math.floor(rightArray.length / 2);
            treeNode.right = new BTNode(rightArray[rightIndex]);
            _branchDown(treeNode.right, rightArray.slice(0, rightIndex), rightArray.slice(rightIndex+1));
        }
        return;
    }

    newTree = new BST();
    // Empty array check.
    if (sortedArray.length == 0){
        return newTree;
    }

    var pivotIndex = Math.floor(sortedArray.length / 2);
    newTree.root = new BTNode(sortedArray[pivotIndex]);
    _branchDown(newTree.root, sortedArray.slice(0, pivotIndex), sortedArray.slice(PivotIndex+1));
    return newTree;
}