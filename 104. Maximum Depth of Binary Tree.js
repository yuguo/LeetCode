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
var maxDepth = function(root) {
    if(root === null){
        return 0
    }
    var maxLeft = maxDepth(root.left) || 0,
        maxRight = maxDepth(root.right) || 0;
    
    return maxLeft > maxRight ? maxLeft + 1 : maxRight + 1;
};
