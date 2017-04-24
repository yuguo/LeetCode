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

// 以下是经过简化的代码：
// 好像太短了也不清晰……

var maxDepth = function(root) {
    return root === null? 0 : Math.max.call(Math, maxDepth(root.left), maxDepth(root.right))+1;
};
