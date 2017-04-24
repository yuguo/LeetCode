/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null || root === undefined){
        return root;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 使用ECMAScript 6的解构来简写一下代码：

var invertTree = function(root) {
    if(root === null){
        return root;
    }else{
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
        return root;
    }
};
