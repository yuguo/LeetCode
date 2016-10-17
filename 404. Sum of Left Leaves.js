/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var f = function(node, leftFlag){
        if(node === null || node === undefined){
            return 0;
        }
        if(node.left === null && node.right === null){
            if(leftFlag){
                return node.val;
            }else{
                return 0;
            }
        }
        return f(node.left, true) + f(node.right, false);
    };
    return f(root, false);
};
